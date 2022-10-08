import { Action, createReducer, on } from '@ngrx/store';
import {
  createPain,
  createPainFailure,
  createPainSuccess,
  deletePain,
  deletePainFailure,
  deletePainSuccess,
  loadPains,
  loadPainsFailure,
  loadPainsSuccess,
  resetPain,
  updatePain,
  updatePainFailure,
  updatePainSuccess,
} from '../../actions/pain/pain.actions';

export const CelebotPainFeatureKey = 'celebot_pain';

export interface CelebotPainState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: CelebotPainState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadPains, (state, payload) => {
    return {
      ...state,

      // infinite scroll
      // data: payload?.isLoadMore ? state.data : {},

      // pagination
      data: {},

      error: null,
      status: 'loading',
      action: 'load',
      isLoadMore: payload?.isLoadMore,
    };
  }),
  on(loadPainsSuccess, (state, payload) => {
    // from reaction
    let reaction = payload?.data?.reaction;

    if (!reaction) {
      let results = payload?.data?.results;
      let newResults = results.map((d: any) => {
        let defaultTranslate = d?.translates.find((d: any) => {
          return d.locale == 'en_US' ? d : {};
        });

        return {
          ...d,
          default_translate: {
            ...defaultTranslate,
          },
        };
      });

      let res = state?.data?.results ? state?.data?.results : [];

      return {
        ...state,
        data: {
          ...payload?.data,
          results: [...res, ...newResults],
        },
        status: 'loaded',
        error: null,
      };
    } else {
      // from reaction modification
      let currentResults = state?.data?.results;
      let mapResults = currentResults.map((d: any) => {
        if (d.uuid === reaction?.pain) {
          d = {
            ...d,
            reaction_stat: reaction.stat,
            reaction_given: reaction.identifier,
          };
        }
        return d;
      });

      return {
        ...state,
        data: {
          ...state?.data,
          results: mapResults,
        },
      };
    }
  }),
  on(loadPainsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createPain, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createPainSuccess, (state, payload) => {
    // Insert default translate
    let defaultTranslate = payload?.data?.translates.find((d: any) => {
      return d.locale == 'en_US' ? d : {};
    });

    let newData = {
      ...payload?.data,
      default_translate: {
        ...defaultTranslate,
      },
    };

    return {
      ...state,
      data: {
        ...state.data,
        results: [newData, ...state?.data?.results],
      },
      status: 'loaded',
      error: null,
    };
  }),
  on(createPainFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetPain, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updatePain, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updatePainSuccess, (state, payload) => {
    let results = state?.data?.results;
    let retResults = results.map((d: any) => {
      if (d.uuid == payload?.data?.uuid) {
        d = {
          ...d,
          translates: payload?.data?.translates,
        };
      }

      return d;
    });

    let newResults = retResults.map((d: any) => {
      let defaultTranslate = d?.translates.find((d: any) => {
        return d.locale == 'en_US' ? d : {};
      });

      return {
        ...d,
        default_translate: {
          ...defaultTranslate,
        },
      };
    });

    return {
      ...state,
      status: 'loaded',
      data: {
        ...state?.data,
        results: newResults,
      },
      error: null,
    };
  }),
  on(updatePainFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  }),

  // DELETE
  on(deletePain, (state) => {
    return {
      ...state,
      action: 'delete',
    };
  }),
  on(deletePainSuccess, (state, payload) => {
    let results = state.data?.results;
    let newResults = results.filter((d: any) => d.uuid != payload?.data?.uuid);

    return {
      ...state,
      data: {
        ...state.data,
        results: newResults,
      },
    };
  }),
  on(deletePainFailure, (state, payload) => {
    return {
      ...state,
    };
  })
);

export function CelebotPainReducer(
  state: CelebotPainState | undefined,
  action: Action
) {
  return reducer(state, action);
}

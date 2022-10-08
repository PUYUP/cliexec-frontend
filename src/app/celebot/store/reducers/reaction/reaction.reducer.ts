import { Action, createReducer, on } from '@ngrx/store';
import {
  createReaction,
  createReactionFailure,
  createReactionSuccess,
  loadReactions,
  loadReactionsFailure,
  loadReactionsSuccess,
  resetReaction,
  updateReaction,
  updateReactionFailure,
  updateReactionSuccess,
} from '../../actions/reaction/reaction.actions';

export const CelebotReactionFeatureKey = 'celebot_reaction';

export interface CelebotReactionState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: CelebotReactionState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadReactions, (state, payload) => {
    return {
      ...state,

      // infinite scroll
      data: payload?.isLoadMore ? state.data : {},

      // pagination
      // data: {},

      error: null,
      status: 'loading',
      action: 'load',
      isLoadMore: payload?.isLoadMore,
    };
  }),
  on(loadReactionsSuccess, (state, payload) => {
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
  }),
  on(loadReactionsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createReaction, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createReactionSuccess, (state, payload) => {
    return {
      ...state,
      data: {
        ...payload.data,
      },
      status: 'loaded',
      error: null,
    };
  }),
  on(createReactionFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetReaction, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updateReaction, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updateReactionSuccess, (state, payload) => {
    return {
      ...state,
      status: 'loaded',
      data: {
        ...payload.data,
      },
      error: null,
    };
  }),
  on(updateReactionFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  })
);

export function CelebotReactionReducer(
  state: CelebotReactionState | undefined,
  action: Action
) {
  return reducer(state, action);
}

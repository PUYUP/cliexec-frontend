import { Action, createReducer, on } from '@ngrx/store';
import {
  addTag,
  removeTag,
  resetTag,
} from '../../actions/select-tag/select-tag.actions';

export const CelebotSelectTagFeatureKey = 'celebot_select_tag';

export interface CelebotSelectTagState {
  data: any;
  action: any;
}

export const initialState: CelebotSelectTagState = {
  data: [],
  action: null,
};

export const reducer = createReducer(
  initialState,

  on(addTag, (state, payload) => {
    let data = state?.data;
    let index = data.findIndex((d: any) => d.name == payload?.data?.name);

    return {
      ...state,
      data: index == -1 ? [...state.data, payload?.data] : data,
      action: 'add',
    };
  }),
  on(removeTag, (state, payload) => {
    let data = state?.data.filter((d: any) => d.name != payload?.data?.name);

    return {
      ...state,
      data: data,
      action: 'remove',
    };
  }),
  on(resetTag, (state, payload) => {
    return {
      ...state,
      data: payload?.clear ? [] : [...state.data],
      action: 'reset',
    };
  })
);

export function CelebotSelectTagReducer(
  state: CelebotSelectTagState | undefined,
  action: Action
) {
  return reducer(state, action);
}

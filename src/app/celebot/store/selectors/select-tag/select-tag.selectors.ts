import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('celebot_select_tag');

export const celebotSelectTag = createSelector(state, (state: AppState) => {
  return state;
});

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

const DEFAULT_TRANSLATE = 'en_US';

export const state = createFeatureSelector<AppState>('celebot_pain');

export const celebotSelectPains = createSelector(state, (state: AppState) => {
  return state;
});

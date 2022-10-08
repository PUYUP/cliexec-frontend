import { createAction, props } from '@ngrx/store';

// LOADS
export const loadPains = createAction(
  '[Pain] Load Pains',
  props<{ isLoadMore?: boolean; url?: string; user_hexid?: string }>()
);

export const loadPainsSuccess = createAction(
  '[Pain] Load Pains Success',
  props<{ data: any }>()
);

export const loadPainsFailure = createAction(
  '[Pain] Load Pains Failure',
  props<{ error: any }>()
);

// CREATE
export const resetPain = createAction('[Pain] Reset Pain');

export const createPain = createAction(
  '[Pain] Create Pain',
  props<{ data: any }>()
);

export const createPainSuccess = createAction(
  '[Pain] Create Pain Success',
  props<{ data: any }>()
);

export const createPainFailure = createAction(
  '[Pain] Create Pain Failure',
  props<{ error: any }>()
);

// UPDATE
export const updatePain = createAction(
  '[Pain] Update Pain',
  props<{ data: any; uuid: string }>()
);

export const updatePainSuccess = createAction(
  '[Pain] Update Pain Success',
  props<{ data: any }>()
);

export const updatePainFailure = createAction(
  '[Pain] Update Pain Failure',
  props<{ error: any }>()
);

// DELETE
export const deletePain = createAction(
  '[Pain] Delete Pain',
  props<{ uuid: string }>()
);

export const deletePainSuccess = createAction(
  '[Pain] Delete Pain Success',
  props<{ data: any }>()
);

export const deletePainFailure = createAction(
  '[Pain] Delete Pain Failure',
  props<{ error: any }>()
);

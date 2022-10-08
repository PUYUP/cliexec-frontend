import { createAction, props } from '@ngrx/store';

// LOADS
export const loadReactions = createAction(
  '[Reaction] Load Reactions',
  props<{ isLoadMore?: boolean; url?: string }>()
);

export const loadReactionsSuccess = createAction(
  '[Reaction] Load Reactions Success',
  props<{ data: any }>()
);

export const loadReactionsFailure = createAction(
  '[Reaction] Load Reactions Failure',
  props<{ error: any }>()
);

// CREATE
export const resetReaction = createAction(
  '[Reaction] Reset Reaction',
  props<{ data?: any }>()
);

export const createReaction = createAction(
  '[Reaction] Create Reaction',
  props<{ data: any }>()
);

export const createReactionSuccess = createAction(
  '[Reaction] Create Reaction Success',
  props<{ data: any }>()
);

export const createReactionFailure = createAction(
  '[Reaction] Create Reaction Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateReaction = createAction(
  '[Reaction] Update Reaction',
  props<{ data: any; uuid: string }>()
);

export const updateReactionSuccess = createAction(
  '[Reaction] Update Reaction Success',
  props<{ data: any }>()
);

export const updateReactionFailure = createAction(
  '[Reaction] Update Reaction Failure',
  props<{ error: any }>()
);

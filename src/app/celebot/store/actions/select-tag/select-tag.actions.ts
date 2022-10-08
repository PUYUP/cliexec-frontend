import { createAction, props } from '@ngrx/store';

export const addTag = createAction(
  '[SelectTag] Add Tag',
  props<{ data: any }>()
);

export const removeTag = createAction(
  '[SelectTag] Remove Tag',
  props<{ data: any }>()
);

export const resetTag = createAction(
  '[SelectTag] Reset Tag',
  props<{ clear?: boolean }>()
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import {
  createPainSuccess,
  loadPainsSuccess,
} from '../../actions/pain/pain.actions';
import {
  addTag,
  removeTag,
  resetTag,
} from '../../actions/select-tag/select-tag.actions';

@Injectable()
export class CelebotSelectTagEffects {
  constructor(private actions$: Actions) {}

  add$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTag),
        tap((payload) => {
          //console.log(payload);
        })
      ),
    { dispatch: false }
  );

  remove$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resetTag),
        tap((payload) => {
          //console.log(payload);
        })
      ),
    { dispatch: false }
  );
}

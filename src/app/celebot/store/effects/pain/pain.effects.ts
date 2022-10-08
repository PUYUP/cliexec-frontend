import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { PainService } from 'src/app/celebot/services/pain/pain.service';
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

@Injectable()
export class CelebotPainEffects {
  constructor(private actions$: Actions, private painService: PainService) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPains),
      mergeMap((payload) => {
        return this.painService.loadPains(payload).pipe(
          map((response) => {
            return loadPainsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadPainsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPainsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPain),
      mergeMap((payload) => {
        return this.painService.createPain(payload?.data).pipe(
          map((response) => {
            return createPainSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createPainFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPainSuccess),
      map((response: any) => {
        return resetPain();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePain),
      mergeMap((payload) => {
        return this.painService.updatePain(payload?.data, payload?.uuid).pipe(
          map((response) => {
            return updatePainSuccess({
              data: response,
            });
          }),
          catchError((error) => of(updatePainFailure({ error: error })))
        );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePainSuccess),
      map((response: any) => {
        return resetPain();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePain),
      mergeMap((payload) => {
        return this.painService.deletePain(payload?.uuid).pipe(
          map((response) => {
            return deletePainSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deletePainFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deletePainSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );
}

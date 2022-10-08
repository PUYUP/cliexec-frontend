import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ReactionService } from 'src/app/celebot/services/reaction/reaction.service';
import {
  createPainSuccess,
  loadPainsSuccess,
} from '../../actions/pain/pain.actions';
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

@Injectable()
export class CelebotReactionEffects {
  constructor(
    private actions$: Actions,
    private reactionService: ReactionService
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReactions),
      mergeMap((payload) => {
        return this.reactionService.loadReactions(payload).pipe(
          map((response) => {
            return loadReactionsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadReactionsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadReactionsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createReaction),
      mergeMap((payload) => {
        return this.reactionService.createReaction(payload?.data).pipe(
          map((response) => {
            return createReactionSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createReactionFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createReactionSuccess),
      map((response: any) => {
        return resetReaction({ data: response?.data });
      })
    )
  );

  resetSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetReaction),
      map((response: any) => {
        return loadPainsSuccess({
          data: {
            reaction: response?.data,
          },
        });
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateReaction),
      mergeMap((payload) => {
        return this.reactionService
          .updateReaction(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateReactionSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateReactionFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateReactionSuccess),
      map((response: any) => {
        return resetReaction({});
      })
    )
  );
}

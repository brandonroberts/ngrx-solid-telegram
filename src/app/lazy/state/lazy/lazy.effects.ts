import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as LazyActions from './lazy.actions';


@Injectable()
export class LazyEffects {


  loadLazys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(LazyActions.loadLazys),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}

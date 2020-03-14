import * as fromAuth from './auth/auth.reducer';
import { ActionReducer, combineReducers } from '@ngrx/store';

export let coreReducers = {
  auth: fromAuth.reducer
};

export function addCoreReducer(feature: string, reducer: ActionReducer<any, any>) {
  coreReducers = {
    ...coreReducers,
    [feature]: reducer
  };

  return combineReducers(coreReducers);
}

export let reducers = {
  core: combineReducers(coreReducers)
};
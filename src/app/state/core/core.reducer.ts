import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';

export const coreFeatureKey = 'core';

export interface State {
  count: number
}

export const initialState: State = {
  count: 0
};

const coreReducer = createReducer(
  initialState,

  on(CoreActions.loadCores, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return coreReducer(state, action);
}

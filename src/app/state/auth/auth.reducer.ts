import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: any;
}

export const initialState: State = {
  user: null
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.loadAuths, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

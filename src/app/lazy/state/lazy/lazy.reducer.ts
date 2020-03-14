import { Action, createReducer, on } from '@ngrx/store';
import * as LazyActions from './lazy.actions';

export const lazyFeatureKey = 'lazy';

export interface State {
  count: number
}

export const initialState: State = {
  count: 1
};

const lazyReducer = createReducer(
  initialState,
  on(LazyActions.addOne, state => ({ ...state, count: state.count + 1 })),
);

export function reducer(state: State | undefined, action: Action) {
  return lazyReducer(state, action);
}

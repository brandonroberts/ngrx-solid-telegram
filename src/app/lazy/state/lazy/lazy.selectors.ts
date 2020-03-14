import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLazy from './lazy.reducer';

export const selectLazyState = createFeatureSelector<fromLazy.State>(
  fromLazy.lazyFeatureKey
);

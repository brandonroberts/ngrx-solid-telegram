import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReducerManager } from '@ngrx/store';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

import * as fromLazy from './state/lazy/lazy.reducer';
import { addCoreReducer } from '../state';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule {
  constructor(reducerManager: ReducerManager) {
    const coreReducer = addCoreReducer('lazy', fromLazy.reducer);
    reducerManager.addReducer('core', coreReducer);
  }
}

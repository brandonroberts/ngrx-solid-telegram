import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addOne } from './state/lazy/lazy.actions';

@Component({
  selector: 'app-lazy',
  template: `
    <p>
      lazy works!
    </p>
  `,
  styles: []
})
export class LazyComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(addOne());
  }

}

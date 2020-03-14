import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="lazy">Load Lazy</a>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngrx-reducer-merge';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  template: `
  <h1>{{titulo}}</h1>
    <p>
      nosotros works!
    </p>
  `,
  styles: `
  h1{
    color: #00f
  }
  `
})
export class NosotrosComponent {
  public titulo: string = "Acerca de nosotros"
}

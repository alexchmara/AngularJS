import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <p>it's your email {{email}}</p>
  <p> and your address {{address.street}} {{address.city}} , {{address.region}} </p>
  `,
})
export class AppComponent  {
name = 'Alex';
email = 'alex@co.pl';
address = {
 street: 'Main12',
 city: 'Posen',
 region: 'GreatPoland'
}}

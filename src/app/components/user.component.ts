import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>it's your email {{email}}</p>
  <p> and your address {{address.street}} {{address.city}} , {{address.region}} </p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
  <h2>Hobbies</h2>
  <ul>
  <li *ngFor="let hobby of hobbies">{{hobby}}</li>
  </ul>
  </div>

  `,
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Alex';
    this.email = 'alex@co.pl';
    this.address = {
      street: 'Main12',
      city: 'Posen',
      region: 'GreatPoland'
    }
    this.hobbies = ['Music', 'Movies', 'Sport'];
    this.showHobbies = false;
  }
  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }

  }
}
interface address {
  street: string;
  city: string;
  region: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>{{name}}</h1>
  <p>it's your email {{email}}</p>
  <p> and your address {{address.street}} {{address.city}} , {{address.region}} </p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
  <h2>Hobbies</h2>
    <ul>
      <li *ngFor="let hobby of hobbies; let i = index">{{hobby}} <button (click)="deleteHobby()">x</button>
      </li>
    </ul>
    <form (submit)="addHobby(hobby.value)">
    <label>Add Hobby:</label><br />
    <input type="text" #hobby /><br />
    </form>
  </div>
  <hr />
  <h4>Edit Data</h4>
  <form>
    <label>Name:</label><br />
    <input type="text" name="name" [(ngModel)]="name" /><br />
    <label>Email:</label><br />
    <input type="text" name="email" [(ngModel)]="email" /><br />
    <label>Street:</label><br />
    <input type="text" name="address.street" [(ngModel)]="address.street" /><br />
    <label>City:</label><br />
    <input type="text" name="address.city" [(ngModel)]="address.city" /><br />
    <label>Region:</label><br />
    <input type="text" name="address.region" [(ngModel)]="address.region" /><br />
  </form>
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
    this.email = 'alex@com.pl';
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
  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}
interface address {
  street: string;
  city: string;
  region: string;
}

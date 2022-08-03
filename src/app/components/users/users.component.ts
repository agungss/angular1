import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  // currentClasses = {};
  // currentStyles = {};

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },

        isActive: true,

        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA',
        },

        isActive: false,

        registered: new Date('03/11/2017 06:20:00'),
        hide: true,
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL',
        },

        isActive: true,

        registered: new Date('11/02/2016 10:30:00'),
        hide: true,
      },
    ];

    this.loaded = true;
  }

  // addUser(user: User) {
  //   this.users.push(user);
  // }
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    //clear the form after typing
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
  onSubmit(e: any) {
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e: any) {
    console.log(e.type);
    console.log(e.target.value);
  }
}

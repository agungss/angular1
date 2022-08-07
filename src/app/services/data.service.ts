import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',

        isActive: true,

        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',

        isActive: false,

        registered: new Date('03/11/2017 06:20:00'),
        hide: true,
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,

        registered: new Date('11/02/2016 10:30:00'),
        hide: true,
      },
    ];

  }

  //dibaca: getUsers() mengeluarkan User bertipe array
  getUsers(): User[] {
    console.log('Fetching users from service...');
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}

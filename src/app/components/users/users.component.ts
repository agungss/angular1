import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
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
    email: ''
  };
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  // currentClasses = {};
  // currentStyles = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

  }

  // addUser(user: User) {
  //   this.users.push(user);
  // }
  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   //clear the form after typing
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   };
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    // console.log(123);
    // e.preventDefault();
    if(!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      // this.users.unshift(value);
      this.userService.addUser(value);

      this.form.reset();
    }
  }


}

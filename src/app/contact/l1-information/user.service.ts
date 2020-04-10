import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { User } from "src/app/contact/l1-information/user.model";

@Injectable()
export class UserService {
  usersChanged = new Subject<User[]>();

  // private users: User[] = [
  //   new User(
  //     "Steven Schaner",
  //     "117 Alden",
  //     "Spring Lake",
  //     "MI",
  //     "49456",
  //     "schanerst@gmail.com",
  //     6164024602,
  //     6168925575,
  //     2317987072,
  //     true,
  //     true,
  //     true,
  //     true,
  //     true,
  //     true,
  //     true,
  //     true,
  //     true
  //   ),
  // ];

  private users: User[] = [];

  constructor() {}

  // Overrides the current users array
  setUsers(users: User[]) {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  getUsers() {
    return this.users.slice();
  }

  getUser(index: number) {
    return this.users[index];
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: User) {
    this.users[index] = newUser;
    this.usersChanged.next(this.users.slice());
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }
}

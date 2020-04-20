import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { User } from "../contact/l1-information/user.model";
import { UserService } from "../contact/l1-information/user.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: HttpClient, private userService: UserService) {}

  storeUsers() {
    const users = this.userService.getUsers();
    this.http
      .put("https://gold-coast-impact-capital.firebaseio.com/users.json", users)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchUsers() {
    return this.http
      .get<User[]>(
        "https://gold-coast-impact-capital.firebaseio.com/users.json"
      )
      .pipe(
        tap((users) => {
          this.userService.setUsers(users);
          // console.log(users);
        })
      );
  }
}

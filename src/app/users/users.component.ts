import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { User } from "../contact/l1-information/user.model";
import { DataStorageService } from "../shared/data-storage.service";
import { UserService } from "../contact/l1-information/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  subsription: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private usersService: UserService
  ) {}

  ngOnInit() {
    this.subsription = this.usersService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.dataStorageService.fetchUsers().subscribe();
    this.users = this.usersService.getUsers();
  }

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
    document.querySelector(".container").classList.remove("container");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
    document.querySelector("div").classList.add("container");
    this.subsription.unsubscribe();
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/contact/l1-information/user.model";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.scss"],
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;

  ngOnInit() {
    console.log(this.user.newsletter);
  }
}

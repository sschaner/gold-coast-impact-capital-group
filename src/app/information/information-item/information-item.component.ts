import { Component, OnInit, Input } from "@angular/core";
import { Information } from "../information.model";

@Component({
  selector: "app-information-item",
  templateUrl: "./information-item.component.html",
  styleUrls: ["./information-item.component.scss"],
})
export class InformationItemComponent implements OnInit {
  @Input() video: Information;
  @Input() index: number;

  ngOnInit(): void {}
}

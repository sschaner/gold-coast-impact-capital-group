import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-l1-information",
  templateUrl: "./l1-information.component.html",
  styleUrls: ["./l1-information.component.scss"]
})
export class L1InformationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
  }
}

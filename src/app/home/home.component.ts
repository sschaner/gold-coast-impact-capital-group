import { Component, OnInit, ɵɵresolveBody } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-home");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-home");
  }
}

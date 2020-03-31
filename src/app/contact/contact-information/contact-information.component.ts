import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-information",
  templateUrl: "./contact-information.component.html",
  styleUrls: ["./contact-information.component.scss"]
})
export class ContactInformationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
  }
}

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-l1-information",
  templateUrl: "./l1-information.component.html",
  styleUrls: ["./l1-information.component.scss"]
})
export class L1InformationComponent implements OnInit {
  returnClass = true;
  mobile = false;

  constructor() {}

  onSubmit(form: NgForm) {
    console.log(form);
    form.reset();
  }

  ngOnInit() {
    if (window.screen.width <= 375) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
  }
}

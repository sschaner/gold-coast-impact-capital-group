import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { UserService } from "./user.service";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Component({
  selector: "app-l1-information",
  templateUrl: "./l1-information.component.html",
  styleUrls: ["./l1-information.component.scss"],
})
export class L1InformationComponent implements OnInit {
  mobile = false;
  submitted = false;
  tempUser = {
    name: "",
    email: "",
    newsletter: "",
    certificateOfDeposit: "",
    pension: "",
    wholeLifeInsurance: "",
    homeEquityLineOfCredit: "",
  };

  constructor(
    private dataStorageService: DataStorageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.dataStorageService.fetchUsers();
    if (window.screen.width <= 375) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const userContactInformation = value.userContactInformation;
    const userContactMethod = value.userContactMethod;
    const lenderFunds = value.lenderFunds;

    this.tempUser.name = userContactInformation.name;
    this.tempUser.email = userContactInformation.email;
    this.tempUser.newsletter = value.newsletter;
    this.tempUser.certificateOfDeposit = lenderFunds.certificateOfDeposit;
    this.tempUser.pension = lenderFunds.pension;
    this.tempUser.wholeLifeInsurance = lenderFunds.wholeLifeInsurance;
    this.tempUser.homeEquityLineOfCredit = lenderFunds.homeEquityLineOfCredit;

    this.userService.addUser(value);
    this.dataStorageService.storeUsers();
    form.reset();
    this.submitted = true;
  }

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
  }
}

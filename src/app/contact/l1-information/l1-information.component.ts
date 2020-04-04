import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../../shared/user.model";

@Component({
  selector: "app-l1-information",
  templateUrl: "./l1-information.component.html",
  styleUrls: ["./l1-information.component.scss"],
})
export class L1InformationComponent implements OnInit {
  // returnClass = true;
  mobile = false;
  submitted = false;
  user = {
    name: "",
    email: "",
    newsletter: "",
    certificateOfDeposit: "",
    pension: "",
    wholeLifeInsurance: "",
    homeEquityLineOfCredit: "",
  };

  constructor() {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const userContactInformation = value.userContactInformation;
    const userContactMethod = value.userContactMethod;
    const lenderFunds = value.lenderFunds;

    this.user.name = userContactInformation.name;
    this.user.email = userContactInformation.email;
    this.user.newsletter = value.newsletter;
    this.user.certificateOfDeposit = lenderFunds.certificateOfDeposit;
    this.user.pension = lenderFunds.pension;
    this.user.wholeLifeInsurance = lenderFunds.wholeLifeInsurance;
    this.user.homeEquityLineOfCredit = lenderFunds.homeEquityLineOfCredit;

    // const user = new User(
    //   userContactInformation.name,
    //   userContactInformation.email,
    //   value.newsletter,
    //   userContactMethod.contactMethodEmail,
    //   userContactMethod.contactMethodText,
    //   userContactMethod.contactMethodDay,
    //   userContactMethod.contactMethodEvening,
    //   lenderFunds.certificateOfDeposit,
    //   lenderFunds.pension,
    //   lenderFunds.wholeLifeInsurance,
    //   lenderFunds.homeEquityLineOfCredit
    // );

    form.reset();
    this.submitted = true;
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

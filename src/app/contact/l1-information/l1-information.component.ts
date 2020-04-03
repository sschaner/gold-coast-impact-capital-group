import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../../shared/user.model";

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
    const value = form.value;
    const userContactInformation = value.userContactInformation;
    const userContactMethod = value.userContactMethod;
    const lenderFunds = value.lenderFunds;

    const user = new User(
      userContactInformation.name,
      userContactInformation.email,
      value.newsletter,
      userContactMethod.contactMethodEmail,
      userContactMethod.contactMethodText,
      userContactMethod.contactMethodEvening,
      userContactMethod.contactMethodEvening,
      lenderFunds.certificateOfDeposit,
      lenderFunds.pension,
      lenderFunds.wholeLifeInsurance,
      lenderFunds.homeEquityLineOfCredit
    );

    if (user.newsletter) {
      console.log(
        `Thank you for submitting the form ${user.name}. You have chosen to receive a newsletter. Thank you.`
      );
    } else {
      console.log(
        `Thank you for submitting the form ${user.name}. You have chosen not to receive a newsletter. Thank you for your interest.`
      );
    }
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

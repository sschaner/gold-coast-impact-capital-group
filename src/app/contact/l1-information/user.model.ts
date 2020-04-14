import { UserContactInformation } from "./user-contact-information.model";
import { UserContactMethod } from "./user-contact-method.model";
import { LenderFunds } from "./lender-funds.model";

export class User {
  public userContactInformation: UserContactInformation;
  public newsletter: boolean;
  public userContactMethod: UserContactMethod;
  public lenderFunds: LenderFunds;
  constructor(
    userContactInformation: UserContactInformation,
    newsletter: boolean,
    userContactMethod: UserContactMethod,
    lenderFunds: LenderFunds
  ) {
    this.userContactInformation = userContactInformation;
    this.newsletter = newsletter;
    this.userContactMethod = userContactMethod;
    this.lenderFunds = lenderFunds;
  }
}

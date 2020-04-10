export class User {
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public email: string;
  public contactCell: number;
  public contactDay: number;
  public contactEvening: number;
  public newsletter: boolean;
  public contactMethodEmail: boolean;
  public contactMethodText: boolean;
  public contactMethodDay: boolean;
  public contactMethodEvening: boolean;
  public certificateOfDeposit: boolean;
  public pension: boolean;
  public wholeLifeInsurance: boolean;
  public homeEquityLineOfCredit: boolean;
  constructor(
    name: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    email: string,
    contactCell: number,
    contactDay: number,
    contactEvening: number,
    newsletter: boolean,
    contactMethodEmail: boolean,
    contactMethodText: boolean,
    contactMethodDay: boolean,
    contactMethodEvening: boolean,
    certificateOfDeposit: boolean,
    pension: boolean,
    wholeLifeInsurance: boolean,
    homeEquityLineOfCredit: boolean
  ) {
    userContactInformation: {
      this.name = name;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.email = email;
      this.contactCell = contactCell;
      this.contactDay = contactDay;
      this.contactEvening = contactEvening;
    }
    this.newsletter = newsletter;
    userContactMethod: {
      this.contactMethodEmail = contactMethodEmail;
      this.contactMethodText = contactMethodText;
      this.contactMethodDay = contactMethodDay;
      this.contactMethodEvening = contactMethodEvening;
    }
    lenderFunds: {
      this.certificateOfDeposit = certificateOfDeposit;
      this.pension = pension;
      this.wholeLifeInsurance = wholeLifeInsurance;
      this.homeEquityLineOfCredit = homeEquityLineOfCredit;
    }
  }
}

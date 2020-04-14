export class LenderFunds {
  public certificateOfDeposit: boolean;
  public pension: boolean;
  public wholeLifeInsurance: boolean;
  public homeEquityLineOfCredit: boolean;
  constructor(
    certificateOfDeposit: boolean,
    pension: boolean,
    wholeLifeInsurance: boolean,
    homeEquityLineOfCredit: boolean
  ) {
    this.certificateOfDeposit = certificateOfDeposit;
    this.pension = pension;
    this.wholeLifeInsurance = wholeLifeInsurance;
    this.homeEquityLineOfCredit = homeEquityLineOfCredit;
  }
}

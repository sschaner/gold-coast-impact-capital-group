export class User {
  constructor(
    public name: string,
    public email: string,
    public newsletter: boolean,
    public contactMethodEmail: boolean,
    public contactMethodText: boolean,
    public contactMethodDay: boolean,
    public contactMethodEvening: boolean,
    public certificateOfDeposit: boolean,
    public pension: boolean,
    public wholeLifeInsurance: boolean,
    public homeEquityLineOfCredit: boolean
  ) {}
}

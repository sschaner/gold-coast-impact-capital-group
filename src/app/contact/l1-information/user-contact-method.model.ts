export class UserContactMethod {
  public contactMethodEmail: boolean;
  public contactMethodText: boolean;
  public contactMethodDay: boolean;
  public contactMethodEvening: boolean;
  constructor(
    contactMethodEmail: boolean,
    contactMethodText: boolean,
    contactMethodDay: boolean,
    contactMethodEvening: boolean
  ) {
    this.contactMethodEmail = contactMethodEmail;
    this.contactMethodText = contactMethodText;
    this.contactMethodDay = contactMethodDay;
    this.contactMethodEvening = contactMethodEvening;
  }
}

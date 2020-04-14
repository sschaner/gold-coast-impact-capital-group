export class UserContactInformation {
  public firstName: string;
  public lastName: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public email: string;
  public contactCell: number;
  public contactDay: number;
  public contactEvening: number;
  constructor(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    email: string,
    contactCell: number,
    contactDay: number,
    contactEvening: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.email = email;
    this.contactCell = contactCell;
    this.contactDay = contactDay;
    this.contactEvening = contactEvening;
  }
}

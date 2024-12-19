import {IdCardDocument} from '../id-card-document/id-card-document.interface';

/*
interface used to represent an ID card.
contains all necessary fields as shown in Figma example
 */
export interface IdCard {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  homeAddress: string;
  mailingAddress: string;
  ssn: string;
  dateOfBirth: string;
  mbi: string;
  documents: IdCardDocument[]; //array of IdCardDocument used to represent documents/files
}

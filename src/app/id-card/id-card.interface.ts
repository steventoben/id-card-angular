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
  documents: IdCardDocument[];
}
interface IdCardDocument {
  //fileName: string;
  fileName: string;
  documentType: 'png' | 'doc';
}

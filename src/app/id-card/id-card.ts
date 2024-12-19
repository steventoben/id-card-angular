import {IdCard} from './id-card.interface';

export const sampleIdCard: IdCard = {
  dateOfBirth: '05/09/1998',
  documents: [
    {fileName: 'id-card.png', documentType: 'png'},
    {fileName: 'Healthcare-info.doc', documentType: 'doc'},
  ],
  email: 'EbonyMoore456@gmail.com',
  firstName: 'Ebony',
  homeAddress: '123 Maple Street, Cleveland, OH 44119',
  lastName: 'Moore',
  mailingAddress: '10th West, 456 Apple Street, Cleveland, OH 44127',
  mbi: '1EG4-TE5-MK73',
  phoneNumber: '2168359545',
  ssn: '235-71-1083'

};

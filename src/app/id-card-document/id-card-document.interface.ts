/*
Interface to represent the files uploaded to ID card
fileName: name of file uploaded to ID card
documentType: file extension for file uploaded to ID card
 */
export interface IdCardDocument {
  fileName: string;
  documentType: 'png' | 'doc';
}

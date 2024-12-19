import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-id-card-document',
  imports: [],
  templateUrl: './id-card-document.component.html',
  styleUrl: './id-card-document.component.scss'
})
export class IdCardDocumentComponent {
  /*
  file name and file type are inputs so when IdCard documents are read in for loop
  they can be passed to this component as input values/props
   */
  @Input() fileName: string = '';
  @Input() documentType: string = '';
  constructor() {
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-id-card-document',
  imports: [],
  templateUrl: './id-card-document.component.html',
  styleUrl: './id-card-document.component.scss'
})
export class IdCardDocumentComponent {
  @Input() fileName: string = '';
  @Input() documentType: string = '';
  constructor() {
  }
}

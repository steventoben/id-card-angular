import {Component, Input, signal} from '@angular/core';
import {IdCard} from './id-card.interface';
import {IdCardDocumentComponent} from '../id-card-document/id-card-document.component';

@Component({
  selector: 'app-id-card',
  imports: [
    IdCardDocumentComponent
  ],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss'
})
export class IdCardComponent {
  @Input() idCard: IdCard;
  isEditing = signal(false);
  constructor() {
  }
}

import {Component, Input, signal} from '@angular/core';
import {IdCard} from './id-card.interface';
import {IdCardDocumentComponent} from '../id-card-document/id-card-document.component';
import {sampleIdCard} from './id-card';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-id-card',
  imports: [
    IdCardDocumentComponent,
    NgClass
  ],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss'
})
export class IdCardComponent {
  @Input() idCard: IdCard = sampleIdCard;
  isEditing = signal(false);
  constructor() {
  }

  toggleEditing() {
    this.isEditing.update(value => !value);
  }
}

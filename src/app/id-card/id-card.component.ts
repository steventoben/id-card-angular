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
  //component can take IdCard as input. The sample object is used as default
  @Input() idCard: IdCard = sampleIdCard;
  //isEditing represents the boolean state of whether editing-mode is on or off.
  //signal is used since this is a piece of app state
  isEditing = signal(false);
  constructor() {
  }

  //function to update boolean state to opposite of current value,
  //if called when editing, edit-mode is turned off
  //if called when not editing, edit-mode is turned on
  toggleEditing() {
    this.isEditing.update(value => !value);
  }
}

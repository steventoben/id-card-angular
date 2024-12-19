import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IdCardComponent} from './id-card/id-card.component';
import {sampleIdCard} from './id-card/id-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IdCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'play';
  protected readonly sampleIdCard = sampleIdCard;
}

import { Component, OnInit } from '@angular/core';
import { SubmitService } from '../../../core/services/submit.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [CardComponent],
})
export class HistoryComponent {
  constructor(public submitService: SubmitService) {}
}

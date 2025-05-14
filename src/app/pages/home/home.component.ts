import { Component, OnInit } from '@angular/core';
import { SubmitService } from '../../core/services/submit.service';
import { AddFeedBackCardComponent } from '../../shared/layouts/add-feedback-card/add-feedback-card.component';
import { HistoryComponent } from '../../shared/layouts/history/history.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [AddFeedBackCardComponent, HistoryComponent],
})
export class HomeComponent implements OnInit {
  constructor(public submitService: SubmitService) {}

  ngOnInit() {}
}

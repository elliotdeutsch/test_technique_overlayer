import { Component, OnInit } from '@angular/core';
import { MyTextareaComponent } from '../../shared/components/my-textarea/my-textarea.component';
import { RatingComponent } from '../../shared/components/rating/rating.component';
import { SubmitButtonComponent } from '../../shared/components/submit-button/submit-button.component';
import { SubmitService } from '../../core/services/submit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MyTextareaComponent, RatingComponent, SubmitButtonComponent],
})
export class HomeComponent implements OnInit {
  public userFeedback: string = '';
  public historyFeedback: string = '';
  public userRating: number = 0;
  constructor(public submitService: SubmitService) {}

  ngOnInit() {
    this.retrieveFeedback();
  }

  getUserFeedback(feedback: string) {
    this.userFeedback = feedback;
    console.log('User feedback:', this.userFeedback);
  }

  submitFeedback(event: any) {
    console.log('Submit button clicked:', event);
    if (event) {
      this.submitService.submitMyFeedback(this.userFeedback);
      this.retrieveFeedback();
    }
  }

  retrieveFeedback() {
    this.historyFeedback = this.submitService.getMyFeedback();
    console.log('Retrieved feedback:', this.historyFeedback);
  }
}

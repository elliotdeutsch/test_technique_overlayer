import { Component, OnInit } from '@angular/core';
import { MyTextareaComponent } from '../../components/my-textarea/my-textarea.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { SubmitButtonComponent } from '../../components/submit-button/submit-button.component';
import { SubmitService } from '../../../core/services/submit.service';

@Component({
  selector: 'app-add-feedback-card',
  templateUrl: './add-feedback-card.component.html',
  styleUrls: ['./add-feedback-card.component.scss'],
  standalone: true,
  imports: [MyTextareaComponent, RatingComponent, SubmitButtonComponent],
})
export class AddFeedBackCardComponent {
  public userFeedback: string = '';
  public userRating: number = 0;
  public errorMessage: string = '';

  constructor(public submitService: SubmitService) {}

  public submitFeedback(): void {
    this.errorMessage = '';

    if (this.userRating <= 0) {
      this.errorMessage = 'La note doit être renseignée.';
      return;
    }
    if (!this.userFeedback.trim()) {
      this.errorMessage = 'Le commentaire ne peut pas être vide.';
      return;
    }

    this.submitService.submitMyFeedback(this.userFeedback, this.userRating);
    this.userFeedback = '';
    this.userRating = 0;
  }

  public onKeydownEnter(event: any): void {
    event.preventDefault();
    this.submitFeedback();
  }
}

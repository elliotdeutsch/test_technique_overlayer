import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  public feedback: string = '';

  constructor() {}

  submitMyFeedback(feedback: string) {
    this.feedback = feedback;
    console.log('Feedback submitted:', this.feedback);
    localStorage.setItem('feedback', this.feedback);
  }

  getMyFeedback(): string {
    return localStorage.getItem('feedback')!.toString();
  }
}

import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  public feedback = signal<string>('');
  public rating = signal<number>(0);

  constructor() {
    const _feedback = localStorage.getItem('feedback');
    if (_feedback) this.feedback.set(_feedback);
    const _rating = localStorage.getItem('rating');
    if (_rating) this.rating.set(+_rating);

    if (typeof window !== 'undefined' && window.localStorage) {
      effect(() => localStorage.setItem('feedback', this.feedback()));
      effect(() => localStorage.setItem('rating', this.rating().toString()));
    }
  }

  public submitMyFeedback(feedback: string, rating: number): void {
    this.feedback.set(feedback);
    this.rating.set(rating);
  }
}

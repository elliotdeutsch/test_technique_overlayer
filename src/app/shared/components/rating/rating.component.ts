import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [RatingModule, CommonModule, FormsModule],
})
export class RatingComponent {
  @Input() public rating = 0;
  @Input() public isEditable = true;
  @Output() public ratingChange = new EventEmitter<number>();

  constructor() {}

  public onRatingChange(value: number): void {
    this.rating = value;
    this.ratingChange.emit(value);
  }
}

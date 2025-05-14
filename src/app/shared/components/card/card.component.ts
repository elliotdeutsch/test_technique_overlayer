import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [RatingComponent],
})
export class CardComponent implements OnInit {
  @Input() public userFeedback: string = '';
  @Input() public userRating: number = 0;
  constructor() {}

  ngOnInit() {}
}

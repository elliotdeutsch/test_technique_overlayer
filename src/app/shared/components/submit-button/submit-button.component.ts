import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubmitService } from '../../../core/services/submit.service';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent implements OnInit {
  @Output() public feedbackIsSubmitted = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.feedbackIsSubmitted.emit(true);
  }
}

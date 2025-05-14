import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-textarea',
  templateUrl: './my-textarea.component.html',
  styleUrls: ['./my-textarea.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MyTextareaComponent implements OnInit {
  public userFeedback: string = '';
  @Output() public feedback = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  emitFeedback() {
    console.log('Feedback emitted:', this.userFeedback);
    this.feedback.emit(this.userFeedback);
    this.userFeedback = '';
  }
}

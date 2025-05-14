import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-textarea',
  templateUrl: './my-textarea.component.html',
  styleUrls: ['./my-textarea.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MyTextareaComponent implements OnInit {
  @Input() public userFeedback = '';
  @Output() public userFeedbackChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  public onFeedbackChange(value: string): void {
    this.userFeedback = value;
    this.userFeedbackChange.emit(value);
  }
}

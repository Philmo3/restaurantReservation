import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick() {
    this.clicked.emit();
  }
}

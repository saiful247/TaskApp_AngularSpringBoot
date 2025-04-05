import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactive-hover-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="submit"
      class="interactive-hover-button w-full"
      (click)="onClick.emit($event)"
    >
      <span class="interactive-hover-button-content">
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styleUrls: ['./interactive-hover-button.component.css']
})
export class InteractiveHoverButtonComponent {
  @Output() onClick = new EventEmitter<Event>();
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shine-border-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shine-border p-[2px] rounded-xl">
      <div class="shine-border-inner rounded-xl p-6">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./shine-border-wrapper.component.css']
})
export class ShineBorderWrapperComponent {}

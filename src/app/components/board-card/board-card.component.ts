import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
})
export class BoardCardComponent {
  @Input() bgColor!: string;
}

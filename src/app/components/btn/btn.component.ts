import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  /**
   * @summary Represent the color of the button
   */
  @Input() color: color;

  /**
   * @summary Represents the tailwind classes related with the color that comes from the Input 'color'
   */
  className: string;

  constructor() {
    this.color = 'primary';
    this.className = 'bg-primary-700 hover:bg-primary-800';
  }

  ngOnInit(): void {
    this.className =
      this.color === 'success'
        ? 'bg-success-700 hover:bg-success-800'
        : 'bg-primary-700 hover:bg-primary-800';
  }
}

type color = 'primary' | 'success';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  /**
   * @summary Represent the color of the button
   */
  @Input() color: color;
  @Input() style: { [klass: string]: any };
  /**
   * @summary Represent the type of the btn
   */
  @Input() type: btnType;

  constructor() {
    this.color = 'primary';
    this.type = 'button';
    this.style = {};
  }

  /**
   * @summary A getter that return the tailwind classes that will be applied depending on the Input 'color'
   */
  get colors() {
    return {
      'bg-primary-700 ': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'bg-gray-200': this.color === 'gray',
      'hover:bg-gray-500': this.color === 'gray',
      'focus:ring-gray-50': this.color === 'gray',
    };
  }
}

type color = 'primary' | 'success' | 'red' | 'gray';

type btnType = 'submit' | 'reset' | 'button';

import { Component } from '@angular/core';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen: boolean;

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  constructor() {
    this.isOpen = false;
  }

  onClick(event: boolean) {
    this.isOpen = event;
  }
}

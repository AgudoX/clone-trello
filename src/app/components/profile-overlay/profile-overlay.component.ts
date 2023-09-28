import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-overlay',
  templateUrl: './profile-overlay.component.html',
})
export class ProfileOverlayComponent {
  @Output() isOpen: EventEmitter<boolean>;

  constructor() {
    this.isOpen = new EventEmitter();
  }

  onClick() {
    this.isOpen.emit(false);
  }
}

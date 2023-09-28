import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar-btn',
  templateUrl: './sidebar-btn.component.html',
})
export class SidebarBtnComponent {
  @Input() icon!: IconDefinition;
  @Input() sidebarPage!: string;
}

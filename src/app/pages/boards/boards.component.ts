import { Component } from '@angular/core';
import {
  SIDEBAR_PAGES,
  SidebarPageInterface,
} from 'src/app/constants/sidebarPages';

import {
  faClock,
  faAngleDown,
  faAngleUp,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

import { faTrello } from '@fortawesome/free-brands-svg-icons';

interface Items {
  label: string;
  items: { label: string }[];
}

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  sidebarPages: SidebarPageInterface[];
  faClock = faClock;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faTrello = faTrello;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items: Items[];
  constructor() {
    this.sidebarPages = SIDEBAR_PAGES;
    this.items = [
      {
        label: 'Item 1',
        items: [
          {
            label: 'Sub item 1',
          },
        ],
      },
      {
        label: 'Item 2',
        items: [
          {
            label: 'Sub item 1',
          },
          {
            label: 'Sub item 2',
          },
          {
            label: 'Sub item 3',
          },
        ],
      },
      {
        label: 'Item 3',
        items: [
          {
            label: 'Sub item 1',
          },
          {
            label: 'Sub item 2',
          },
          {
            label: 'Sub item 3',
          },
        ],
      },
    ];
  }
}

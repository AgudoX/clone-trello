import {
  IconDefinition,
  faSquarePollVertical,
  faBox,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

export interface SidebarPageInterface {
  icon: IconDefinition;
  sidebarPage: string;
}

export const SIDEBAR_PAGES: SidebarPageInterface[] = [
  {
    icon: faSquarePollVertical,
    sidebarPage: 'Boards',
  },
  {
    icon: faBox,
    sidebarPage: 'Templates',
  },
  {
    icon: faHouse,
    sidebarPage: 'Home',
  },
];

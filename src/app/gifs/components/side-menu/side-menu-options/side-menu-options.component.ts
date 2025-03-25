import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  icon: string;
  label: string;
  subLabel: string;
  route: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export default class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'View trending gifs',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-search',
      label: 'Buscador',
      subLabel: 'Search for gifs',
      route: '/dashboard/search',
    },
  ];
}

import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
})
export default class SideMenuHeaderComponent {
    env = environment;
}

import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import SideMenuHeaderComponent from "../../components/side-menu-header/side-menu-header.component";
import SideMenuOptionsComponent from "../../components/side-menu-options/side-menu-options.component";
import SideMenuComponent from "../../components/side-menu/side-menu.component";

@Component({
    selector: 'gifs-dashboard',
    imports: [RouterOutlet, SideMenuComponent],
    templateUrl: './dashboard-page.component.html'
})
export default class DashboardPageComponent {
}
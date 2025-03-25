import { Component, signal } from "@angular/core";
import GifListComponent from "../../components/gif-list/gif-list.component";

@Component({
    selector: 'gifs-trending',
    templateUrl: './trending-page.component.html',
    imports: [GifListComponent]
})
export default class TrendingPageComponent {
}
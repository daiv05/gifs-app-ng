import { Component } from '@angular/core';
import GifListItemComponent from '../gif-list-item/gif-list-item.component';

interface Gif {
  title: string;
  url: string;
}

@Component({
  selector: 'gifs-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export default class GifListComponent {
  gifs: Gif[] = [];
}

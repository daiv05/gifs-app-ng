import { Component, input } from '@angular/core';

interface Gif {
  title: string;
  url: string;
}

@Component({
  selector: 'gifs-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export default class GifListItemComponent {
  gif = input<Gif>();
}

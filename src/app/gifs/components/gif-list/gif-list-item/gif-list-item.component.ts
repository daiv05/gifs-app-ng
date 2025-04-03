import { Component, input } from '@angular/core';
import { Gif } from '@app/gifs/interfaces/gif.interfaces';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export default class GifListItemComponent {
  gif = input<Gif>({} as Gif);

  constructor() {
  }
}

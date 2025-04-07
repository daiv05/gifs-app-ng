import { Component, input, signal } from '@angular/core';
import GifListItemComponent from './gif-list-item/gif-list-item.component';
import { Gif } from '@app/gifs/interfaces/gif.interfaces';

@Component({
  selector: 'gifs-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export default class GifListComponent {
  gifs = input.required<Gif[][]>();
}

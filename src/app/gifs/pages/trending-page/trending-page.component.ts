import { Component, inject, signal } from '@angular/core';
import GifListComponent from '../../components/gif-list/gif-list.component';
import GifService from '@app/gifs/services/gifs.service';
import { Gif } from '@app/gifs/interfaces/gif.interfaces';

@Component({
  selector: 'gifs-trending',
  templateUrl: './trending-page.component.html',
  imports: [GifListComponent],
})
export default class TrendingPageComponent {
  gifService = inject(GifService);

  // gifsSignal = signal<Gif[]>(this.gifService.trendingGifs());

  //   gifsSignal = signal<Gif[]>(this.gifService.trendingGifs());

  constructor() {
    // console.log(this.gifsSignal(), 'this.gifsSignal()');
  }
}

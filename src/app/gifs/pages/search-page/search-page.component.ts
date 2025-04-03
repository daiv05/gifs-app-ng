import { Component, inject, signal } from '@angular/core';
import GifListComponent from '../../components/gif-list/gif-list.component';
import GifService from '@app/gifs/services/gifs.service';
import { Gif } from '@app/gifs/interfaces/gif.interfaces';
import { GifMapper } from '@app/gifs/mapper/gif.mapper';

@Component({
  selector: 'gifs-search',
  templateUrl: './search-page.component.html',
  imports: [GifListComponent],
})
export default class SearchPageComponent {
  gifService = inject(GifService);

  gifsSearchSignal = signal<Gif[]>([]);

  constructor() {
    // console.log(this.gifsSearchSignal(), 'this.gifsSearchSignal()');
  }

  onSearch(searchTerm: string) {
    console.log(searchTerm, 'searchTerm');
    this.gifService.searchGifs(searchTerm).subscribe((resp) => {
        // const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data); // * No se ocupa gracias al map (pipe)
        this.gifsSearchSignal.set(resp);
    });
  }
}

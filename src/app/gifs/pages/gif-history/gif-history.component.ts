import { Component, computed, inject, signal } from '@angular/core';
import GifListComponent from '../../components/gif-list/gif-list.component';
import GifService from '@app/gifs/services/gifs.service';
import { Gif } from '@app/gifs/interfaces/gif.interfaces';
import { GifMapper } from '@app/gifs/mapper/gif.mapper';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'gif-history',
  templateUrl: './gif-history.component.html',
  imports: [GifListComponent],
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  // searchTerm = inject(ActivatedRoute).snapshot.params['searchTerm'];
  // searchTerm = inject(ActivatedRoute).params.subscribe((params) => {
  //   this.searchTerm = params['searchTerm'];
  // });
  searchTerm = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['searchTerm'] ?? '')
    )
  );

  // gifsByKey = computed(() => {
  //   return this.gifService.getHistoryGifs(this.searchTerm());
  // });

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.searchTerm());
  });
}

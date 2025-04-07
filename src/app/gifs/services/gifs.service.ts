import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment';
import { GiphyItem, GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const GIF_KEY = 'gif';

const loadFromLocalStorage = () => {
  const searchHistoryJson = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(searchHistoryJson) as Record<string, Gif[]>;
  return gifs;
};

@Injectable({ providedIn: 'root' })
export default class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  searchableGifs = signal<Gif[]>([]);

  //   trendingGifsLoading = signal(false);
  //   searchableGifsLoading = signal(false);

  tredingGifGroup = computed<Gif[][]>(() => {
    const groups = []
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  });

  searchableGifsGroup = computed<Gif[][]>(() => {
    const groups = []
    for (let i = 0; i < this.searchableGifs().length; i += 3) {
      groups.push(this.searchableGifs().slice(i, i + 3));
    }
    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
        this.trendingGifs.set(gifs);
      });
  }

  saveGofToLocalStorage = effect(() => {
    const historyJson = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyJson);
  });

  searchGifs(searchTerm: string) {
    // this.searchableGifsLoading.set(true);
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: searchTerm,
          limit: 20,
        },
      })
      .pipe(
        map(({ data }) => {
          const gifs = GifMapper.mapGiphyItemsToGifArray(data);
          return gifs;
        }),
        tap((gifs) => {
          this.searchHistory.update((history) => ({
            ...history,
            [searchTerm.toLowerCase()]: gifs,
          }));
        })
      );

    //   .subscribe((response) => {
    //     const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
    //     this.searchableGifs.set(gifs);
    //     this.searchableGifsLoading.set(false);
    //   });
  }

  getHistoryGifs(searchTerm: string): Gif[][] {
    // return this.searchHistory()[searchTerm] ?? [];
    const groups = []
    const searchHistory = this.searchHistory()[searchTerm] ?? [];
    for (let i = 0; i < searchHistory.length; i += 3) {
      groups.push(searchHistory.slice(i, i + 3));
    }
    return groups;

  }
}

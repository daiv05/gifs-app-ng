import { Gif } from "../interfaces/gif.interfaces";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static mapGiphyItemToGif (giphyItem: GiphyItem): Gif {
        return {
            id: giphyItem.id,
            title: giphyItem.type,
            url: giphyItem.images.original.url,
        };
    }

    static mapGiphyItemsToGifArray (giphyItems: GiphyItem[]): Gif[] {
        return giphyItems.map((giphyItem) => this.mapGiphyItemToGif(giphyItem));
    }
}
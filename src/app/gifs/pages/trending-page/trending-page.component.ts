import { Component, inject, signal } from "@angular/core";
import GifListComponent from "../../components/gif-list/gif-list.component";
import GifService from "@app/gifs/services/gifs.service";
import { Gif } from "@app/gifs/interfaces/gif.interfaces";

const imageUrls: string[] = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];

@Component({
    selector: 'gifs-trending',
    templateUrl: './trending-page.component.html',
    imports: [GifListComponent]
})
export default class TrendingPageComponent {

    gifService = inject(GifService);

    gifsSignal = signal<Gif[]>(this.gifService.trendingGifs());

    constructor() {
        console.log(this.gifsSignal(), 'this.gifsSignal()');
    }

}
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  title = 'Recent Photos';
  @Input() filterBy?: string = 'all';
  visibleImages: any[] = [];
  categories = new Set();
  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
    this.categories = this.imageService.getCategories();
  }

  ngOnInit() {
  }
  ngOnChanges() {

    this.visibleImages = this.imageService.getImages();

  }

}

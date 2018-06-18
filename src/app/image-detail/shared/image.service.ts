import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
  getCategories() {
    let images = IMAGES.slice(0);
    let categories = [];
    images.forEach(function (image) {
      let category = image.category;
      let x = category.indexOf('|') ? category.split('|') : category;
      categories.push.apply(categories, x);
    });
    return new Set(categories);
  }

}
const IMAGES = [
  { id: 1, category: "boats", caption: "Cool Boat", url: "assets/img/boat.jpg" },
  { id: 2, category: "city|scene", caption: "My City", url: "assets/img/city.jpg" },
  { id: 3, category: "cup", caption: "Random", url: "assets/img/cup.jpg" },
  { id: 4, category: "desert|scene", caption: "Hot!!!", url: "assets/img/desert.jpg" },
  { id: 5, category: "festival", caption: "Booom!", url: "assets/img/festival.jpg" },
  { id: 6, category: "floor", caption: "flat!", url: "assets/img/floor.jpg" },
  { id: 7, category: "flower", caption: "sweeeeet!!!", url: "assets/img/flower.jpg" },
  { id: 8, category: "girl", caption: "Cute!", url: "assets/img/girl.jpg" },
  { id: 9, category: "light", caption: "Shining!!!", url: "assets/img/light.jpg" },
  { id: 10, category: "map", caption: "PubG?", url: "assets/img/map.jpg" },
  { id: 11, category: "plants", caption: "Greeeen!", url: "assets/img/plants.jpg" },
  { id: 12, category: "scene", caption: "Nice!", url: "assets/img/scene.jpg" },
  { id: 13, category: "scene", caption: "Another One!", url: "assets/img/scene2.jpg" },
  { id: 14, category: "snow|scene", caption: "Freezin!", url: "assets/img/snow.jpg" },
  { id: 15, category: "beautiful|scene", caption: "Beautiful", url: "assets/img/beautiful.jpg" },
];

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(items: any[], criteria: string): any {
    if (criteria == 'all') {
      return items;
    }
    return items.filter(item => {
      let categoriesOfItem = item.category;
      let x = categoriesOfItem.indexOf('|') ? categoriesOfItem.split('|') : categoriesOfItem;
      return x.find(function (i) { return i == criteria });
    });
  }

}

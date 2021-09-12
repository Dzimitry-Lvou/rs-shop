import { Pipe, PipeTransform } from '@angular/core';
import { GoodsModel } from 'src/app/core/models/goods.model';
import { SortSettingsModel } from '../models/sort-settings.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  private prevSort = '';

  private desc = true;

  transform(val: GoodsModel[], settings: SortSettingsModel): GoodsModel[] {
    const value = [...val];
    if (settings.byRating) {
      this.desc = this.prevSort !== 'byRating' ? true : !this.desc;
      this.prevSort = 'byRating';

      return value.sort((a: GoodsModel, b: GoodsModel) => {
        return (a.rating - b.rating) * (this.desc ? -1 : 1);
      });
    }
    if (settings.byPrice) {
      this.desc = this.prevSort !== 'byPrice' ? true : !this.desc;
      this.prevSort = 'byPrice';

      return value.sort((a: GoodsModel, b: GoodsModel) => {
        return (a.price - b.price) * (this.desc ? -1 : 1);
      });
    }
    return value;
  }
}

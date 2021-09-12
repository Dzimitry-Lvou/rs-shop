import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { CategoryModel } from 'src/app/core/models/category.model';
import { GoodsModel } from 'src/app/core/models/goods.model';
import { SubCategoryModel } from 'src/app/core/models/subcategory.model';

import { CategoryService } from 'src/app/core/services/category.service';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  searchInput: FormControl = new FormControl('');

  isMenuOpen = false;

  categories: CategoryModel[] = [];

  subCategories: SubCategoryModel[] = [];

  goods: GoodsModel[] = [];

  constructor(private categoryService: CategoryService, private goodsService: GoodsService) {
    this.goodsService.searchedGoods$.subscribe((goods) => {
      this.goods = goods;
    });
  }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isMenuOpen = false)),
        filter((v) => v.length > 1),
      )
      .subscribe((v) => {
        this.categories = this.categoryService.searchCategory(v);
        this.subCategories = this.categoryService.searchSubCategory(v);
        this.goodsService.searchGoods(v);
        this.isMenuOpen = true;
      });
  }

  clear() {
    this.searchInput.setValue('');
  }
}

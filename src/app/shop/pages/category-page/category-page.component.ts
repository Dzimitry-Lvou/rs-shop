import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { GoodsModel } from 'src/app/core/models/goods.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  category$: string | undefined;

  categoryUrl: string = '';

  goodsAmount = 10;

  isMaxGoodsAmount = false;

  goods$: GoodsModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsService,
    private categoryService: CategoryService,
  ) {
    this.route.params.subscribe((params) => {
      this.category$ = params.subCategoryId
        ? this.categoryService.getSubCategoryById(params.subCategoryId)?.name
        : this.categoryService.getCategoryById(params.categoryId)?.name;

      this.categoryUrl = params.subCategoryId
        ? `${params.categoryId}/${params.subCategoryId}`
        : `${params.categoryId}`;

      this.goodsAmount = 10;
      this.isMaxGoodsAmount = false;
      this.updateGoods();
    });
  }

  ngOnInit() {
    this.updateGoods();
  }

  updateGoods() {
    this.goodsService
      .getGoodsByCategory(this.categoryUrl, this.goodsAmount)
      .pipe(
        map((goods) => {
          if (goods.length < this.goodsAmount) {
            this.isMaxGoodsAmount = true;
          }
          this.goods$ = goods;
        }),
      )
      .subscribe((goods) => goods);
  }

  onClick() {
    this.goodsAmount += 10;
    this.updateGoods();
  }
}

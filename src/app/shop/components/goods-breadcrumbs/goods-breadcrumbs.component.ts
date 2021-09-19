import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/core/models/category.model';
import { GoodsModel } from 'src/app/core/models/goods.model';
import { SubCategoryModel } from 'src/app/core/models/subcategory.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-goods-breadcrumbs',
  templateUrl: './goods-breadcrumbs.component.html',
  styleUrls: ['./goods-breadcrumbs.component.scss'],
})
export class GoodsBreadcrumbsComponent implements OnInit {
  category$: CategoryModel | undefined;

  subCategory$: SubCategoryModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private goodsService: GoodsService,
  ) {}

  ngOnInit() {
    this.goodsService
      .getGoodsById(this.route.snapshot.params.productId)
      .subscribe((v: GoodsModel) => {
        this.category$ = this.categoryService.getCategoryById(v.category);

        this.subCategory$ = this.categoryService.getSubCategoryById(v.subCategory);
        console.log(v, this.category$, this.subCategory$);
      });
  }
}

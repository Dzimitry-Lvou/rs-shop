import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodsModel } from 'src/app/core/models/goods.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  goodsItem$!: GoodsModel;

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsService,
    private categoryService: CategoryService,
  ) {
    goodsService.getGoodsById(this.route.snapshot.params.productId).subscribe((v) => {
      this.goodsItem$ = v;
    });
  }
}

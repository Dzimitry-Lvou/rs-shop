import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { defaultItem, GoodsModel } from 'src/app/core/models/goods.model';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  goodsItem$: GoodsModel = defaultItem;

  constructor(private route: ActivatedRoute, private goodsService: GoodsService) {}

  ngOnInit() {
    this.goodsService.getGoodsById(this.route.snapshot.params.productId).subscribe((v) => {
      this.goodsItem$ = v;
    });
  }
}

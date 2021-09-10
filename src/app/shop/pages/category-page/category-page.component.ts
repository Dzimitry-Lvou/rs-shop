import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  category$: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsService,
    private categoryService: CategoryService,
  ) {
    this.route.params.subscribe((params) => {
      if (params.subCategoryId) {
        this.category$ = this.categoryService.getSubCategoryById(params.subCategoryId)?.name;
      } else {
        this.category$ = this.categoryService.getCategoryById(params.categoryId)?.name;
      }
    });
  }

  ngOnInit() {
    console.log('works');
  }
}

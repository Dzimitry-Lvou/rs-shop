import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/core/models/category.model';
import { SubCategoryModel } from 'src/app/core/models/subcategory.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  category$: CategoryModel | undefined;

  subCategory$: SubCategoryModel | undefined;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category$ = this.categoryService.getCategoryById(params.categoryId);
    });

    this.route.params.subscribe((params) => {
      this.subCategory$ = this.categoryService.getSubCategoryById(params.subCategoryId);
    });
  }
}

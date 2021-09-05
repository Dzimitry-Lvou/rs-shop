import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { CategoryModel } from 'src/app/core/models/category.model';
import { SubCategoryModel } from 'src/app/core/models/subcategory.model';

import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  searchInput: FormControl = new FormControl(null);

  isMenuOpen = false;

  categories: CategoryModel[] = [];

  subCategories: SubCategoryModel[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        filter((v) => v.length >= 2),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe((v) => {
        this.categories = this.categoryService.searchCategory(v);
        this.subCategories = this.categoryService.searchSubCategory(v);
        this.isMenuOpen = true;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { CategoryModel } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  searchInput: FormControl = new FormControl(null);

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        filter((v) => v.length >= 3),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((v) => {
        const searchedCats: CategoryModel[] = this.categoryService.searchCategory(v);
        console.log(searchedCats);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
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
        filter((v) => v.length >= 2),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe((v) => {
        console.log(
          this.categoryService.searchCategory(v),
          this.categoryService.searchSubCategory(v),
        );
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  searchInput: FormControl = new FormControl(null);

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        filter((v) => v.length >= 3),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((v) => console.log(v));
  }
}

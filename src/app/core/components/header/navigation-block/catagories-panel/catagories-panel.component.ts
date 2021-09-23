import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryModel } from 'src/app/core/models/category.model';
import { selectCategories } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-catagories-panel',
  templateUrl: './catagories-panel.component.html',
  styleUrls: ['./catagories-panel.component.scss'],
})
export class CatagoriesPanelComponent implements OnInit {
  isOpen = false;

  categories: CategoryModel[] = [];

  activeCategory!: CategoryModel;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectCategories).subscribe((cats) => {
      this.categories = cats;
      this.activeCategory = this.categories[0];
      console.log(cats);
    });
  }
}

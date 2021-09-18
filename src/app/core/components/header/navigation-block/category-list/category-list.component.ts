import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/core/models/category.model';
import { loadCategories } from 'src/app/redux/actions/card.actions';
import { selectCategories } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  categories$: Observable<CategoryModel[]> = this.store.select(selectCategories);

  constructor(private store: Store) {
    store.dispatch(loadCategories());
  }
}

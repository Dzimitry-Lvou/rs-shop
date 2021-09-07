import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/core/models/category.model';
import { loadCategories } from 'src/app/redux/actions/card.actions';
import { getCategories } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent {
  categories$: Observable<CategoryModel[]> = this.store.select(getCategories);

  constructor(private store: Store) {
    store.dispatch(loadCategories());
  }
}

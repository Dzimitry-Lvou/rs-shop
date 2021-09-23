import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent {
  items: string[] = [];

  constructor(private store: Store) {
    this.store.select(selectUser).subscribe((user) => {
      this.items = user ? [...user.favorites] : [];
    });
  }
}

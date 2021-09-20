import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  items: string[] = [];

  constructor(private store: Store) {
    this.store.select(selectUser).subscribe((user) => {
      this.items = user ? [...user.cart] : [];
    });
  }
}

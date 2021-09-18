import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent {
  cartItemsAmount$ = 0;

  constructor(private store: Store) {
    this.store.select(selectUser).subscribe((user) => {
      this.cartItemsAmount$ = user ? user.cart.length : 0;
    });
  }
}

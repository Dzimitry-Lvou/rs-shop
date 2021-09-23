import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/core/services/user.service';
import { updateUser } from 'src/app/redux/actions/card.actions';
import { selectUser } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-cart-actions',
  templateUrl: './cart-actions.component.html',
  styleUrls: ['./cart-actions.component.scss'],
})
export class CartActionsComponent implements OnInit {
  @Input() goodsId = '';

  user$ = this.store.select(selectUser);

  isInCart$: boolean | undefined = false;

  constructor(private store: Store, private userService: UserService) {}

  ngOnInit() {
    this.user$.subscribe((user) => {
      this.isInCart$ = user?.cart.includes(this.goodsId);
    });
    this.store.dispatch(updateUser());
  }

  addToCart() {
    this.userService.addToCart(this.goodsId);
  }

  removeFromCart() {
    this.userService.removeFromCart(this.goodsId);
  }
}

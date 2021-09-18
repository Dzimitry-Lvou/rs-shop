import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoodsModel } from 'src/app/core/models/goods.model';
import { UserService } from 'src/app/core/services/user.service';
import { selectUser } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss'],
})
export class GoodsCardComponent implements OnInit {
  @Input() goodsItem!: GoodsModel;

  user$ = this.store.select(selectUser);

  isInCart$: boolean | undefined = false;

  isFavorite$: boolean | undefined = false;

  constructor(private store: Store, private userService: UserService) {}

  ngOnInit() {
    this.user$.subscribe((user) => {
      this.isInCart$ = user?.cart.includes(this.goodsItem.id);
      this.isFavorite$ = user?.favorites.includes(this.goodsItem.id);
    });
  }

  addToCart() {
    this.userService.addToCart(this.goodsItem.id);
  }

  removeFromCart() {
    this.userService.removeFromCart(this.goodsItem.id);
  }

  addToFavorites() {
    this.userService.addToFavorites(this.goodsItem.id);
  }

  removeFromFavorites() {
    this.userService.removeFromFavorites(this.goodsItem.id);
  }
}

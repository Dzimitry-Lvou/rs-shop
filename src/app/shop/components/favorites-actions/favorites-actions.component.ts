import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/core/services/user.service';
import { selectUser } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-favorites-actions',
  templateUrl: './favorites-actions.component.html',
  styleUrls: ['./favorites-actions.component.scss'],
})
export class FavoritesActionsComponent implements OnInit {
  @Input() goodsId = '';

  user$ = this.store.select(selectUser);

  isFavorite$: boolean | undefined = false;

  constructor(private store: Store, private userService: UserService) {}

  ngOnInit() {
    this.user$.subscribe((user) => {
      this.isFavorite$ = user?.favorites.includes(this.goodsId);
    });
  }

  addToFavorites() {
    this.userService.addToFavorites(this.goodsId);
  }

  removeFromFavorites() {
    this.userService.removeFromFavorites(this.goodsId);
  }
}

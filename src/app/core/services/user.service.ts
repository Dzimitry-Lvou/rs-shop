import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateUser } from 'src/app/redux/actions/card.actions';
import { UserModel } from '../models/user.model';
import { USER_TOKEN_CONST_NAME } from './auth.service';

const API_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private store: Store) {}

  getUser(): Observable<UserModel> {
    const token = localStorage.getItem(USER_TOKEN_CONST_NAME);
    return this.http.request<UserModel>('get', `${API_URL}/users/userInfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        token,
      },
    });
  }

  addToCart(goodsId: string): void {
    const token = localStorage.getItem(USER_TOKEN_CONST_NAME);
    this.http
      .request('post', `${API_URL}/users/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          id: goodsId,
        },
        responseType: 'text',
      })
      .subscribe(() => {
        this.store.dispatch(updateUser());
      });
  }

  removeFromCart(goodsId: string): void {
    const token = localStorage.getItem(USER_TOKEN_CONST_NAME);
    this.http
      .request('delete', `${API_URL}/users/cart?id=${goodsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'text',
      })
      .subscribe(() => {
        this.store.dispatch(updateUser());
      });
  }

  addToFavorites(goodsId: string): void {
    const token = localStorage.getItem(USER_TOKEN_CONST_NAME);
    this.http
      .request('post', `${API_URL}/users/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          id: goodsId,
        },
        responseType: 'text',
      })
      .subscribe(() => {
        this.store.dispatch(updateUser());
      });
  }

  removeFromFavorites(goodsId: string): void {
    const token = localStorage.getItem(USER_TOKEN_CONST_NAME);
    this.http
      .request('delete', `${API_URL}/users/favorites?id=${goodsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'text',
      })
      .subscribe(() => {
        this.store.dispatch(updateUser());
      });
  }
}

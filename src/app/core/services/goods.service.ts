import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GoodsModel } from '../models/goods.model';

const API_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  private goods: BehaviorSubject<GoodsModel[]> = new BehaviorSubject<GoodsModel[]>([]);

  private searchedGoods: BehaviorSubject<GoodsModel[]> = new BehaviorSubject<GoodsModel[]>([]);

  goods$: Observable<GoodsModel[]> = this.goods.pipe(
    map((items) => {
      return items;
    }),
  );

  searchedGoods$: Observable<GoodsModel[]> = this.searchedGoods.pipe(
    map((items) => {
      return items;
    }),
  );

  constructor(private http: HttpClient) {
    this.getgoods();
  }

  getgoods() {
    this.http.get<GoodsModel[]>(`${API_URL}/goods`).subscribe((res) => this.goods.next(res));
  }

  searchGoods(input: string) {
    this.http
      .get<GoodsModel[]>(`${API_URL}/goods/search?text=${input}`)
      .subscribe((res) => this.searchedGoods.next(res));
  }
}

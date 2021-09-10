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
  private searchedGoods: BehaviorSubject<GoodsModel[]> = new BehaviorSubject<GoodsModel[]>([]);

  searchedGoods$: Observable<GoodsModel[]> = this.searchedGoods.pipe(
    map((items) => {
      return items;
    }),
  );

  constructor(private http: HttpClient) {}

  getGoodsByCategory(category: string): Observable<GoodsModel[]> {
    return this.http.get<GoodsModel[]>(`${API_URL}/goods/category/${category}`);
  }

  getGoodsBySubCategory(category: string, subCategory: string): Observable<GoodsModel[]> {
    return this.http.get<GoodsModel[]>(`${API_URL}/goods/category/${category}/${subCategory}`);
  }

  getGoodsById(id: string): Observable<GoodsModel> {
    return this.http.get<GoodsModel>(`${API_URL}/goods/item/${id}`);
  }

  searchGoods(input: string) {
    this.http
      .get<GoodsModel[]>(`${API_URL}/goods/search?text=${input}`)
      .subscribe((res) => this.searchedGoods.next(res));
  }
}

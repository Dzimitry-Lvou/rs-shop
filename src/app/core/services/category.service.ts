import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryModel } from '../models/category.model';

const API_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: BehaviorSubject<CategoryModel[]> = new BehaviorSubject<CategoryModel[]>([]);

  categories$: Observable<CategoryModel[]> = this.categories.pipe(
    map((items) => {
      return items;
    }),
  );

  constructor(private http: HttpClient) {
    this.getCategories();
  }

  getCategories() {
    this.http
      .get<CategoryModel[]>(`${API_URL}/categories`)
      .subscribe((res) => this.categories.next(res));
  }

  searchCategory(input: string): CategoryModel[] {
    return this.categories.getValue().filter((v: CategoryModel) => v.name.includes(input));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCategories } from 'src/app/redux/actions/card.actions';
import { getCategories } from 'src/app/redux/selectors/selectors';
import { CategoryModel } from '../models/category.model';
import { SubCategoryModel } from '../models/subcategory.model';

const API_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: CategoryModel[] = [];

  constructor(private http: HttpClient, private store: Store) {
    this.store.select(getCategories).subscribe((categories) => {
      this.categories = categories;
      console.log('searchCategory', this.categories);
    });
  }

  getAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${API_URL}/categories`);
  }

  searchCategory(input: string): CategoryModel[] {
    return this.categories.filter((v: CategoryModel) =>
      v.name.toLowerCase().includes(input.toLowerCase()),
    );
  }

  searchSubCategory(input: string): SubCategoryModel[] {
    let subCategories: SubCategoryModel[] = this.categories.flatMap((v) => v.subCategories);

    return subCategories.filter((v: SubCategoryModel) =>
      v.name.toLowerCase().includes(input.toLowerCase()),
    );
  }
}

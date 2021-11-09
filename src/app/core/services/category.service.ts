import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCategories } from 'src/app/redux/selectors/selectors';
import { CategoryModel } from '../models/category.model';
import { SubCategoryModel } from '../models/subcategory.model';
import { API_URL } from './apiUrl';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: CategoryModel[] = [];

  constructor(private http: HttpClient, private store: Store) {
    // eslint-disable-next-line ngrx/no-store-subscription
    this.store.select(selectCategories).subscribe((categories) => {
      this.categories = categories;
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
    let subCategories: SubCategoryModel[] = this.categories.flatMap((v) =>
      v.subCategories.map((subCat) => {
        return { ...subCat, mainCategoryId: v.id };
      }),
    );

    return subCategories.filter((v: SubCategoryModel) =>
      v.name.toLowerCase().includes(input.toLowerCase()),
    );
  }

  getCategoryById(categoryId: string): CategoryModel | undefined {
    return this.categories.find((cat) => cat.id === categoryId);
  }

  getSubCategoryById(subCategoryId: string): SubCategoryModel | undefined {
    let subCategories: SubCategoryModel[] = this.categories.flatMap((v) =>
      v.subCategories.map((subCat) => {
        return { ...subCat, mainCategoryId: v.id };
      }),
    );

    return subCategories.find((subCat) => subCat.id === subCategoryId);
  }
}

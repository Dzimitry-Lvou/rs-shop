import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/services/category.service';
import { loadCategories, updateCategories } from '../actions/card.actions';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      tap(() => console.log('start')),
      ofType(loadCategories),
      mergeMap(() =>
        this.categoryService.getAll().pipe(
          map((categories) => updateCategories({ categories })),
          tap(() => console.log('works')),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private categoryService: CategoryService) {
    console.log(this.loadCategories$);
  }
}

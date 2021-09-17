import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { loginUser, updateUser, userUpdateSucces } from '../actions/card.actions';

@Injectable()
export class UpdateUserEffects {
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser, loginUser),
      mergeMap(() =>
        this.authService.getUser().pipe(
          map((user) => userUpdateSucces({ user })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}

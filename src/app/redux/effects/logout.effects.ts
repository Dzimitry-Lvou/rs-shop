import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthService, USER_TOKEN_CONST_NAME } from 'src/app/core/services/auth.service';
import { logoutUser, userLogoutSuccess } from '../actions/card.actions';

@Injectable()
export class LogoutEffects {
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutUser),
      tap(() => localStorage.removeItem(USER_TOKEN_CONST_NAME)),
      map(() => userLogoutSuccess()),
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}

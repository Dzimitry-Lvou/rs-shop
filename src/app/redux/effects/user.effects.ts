import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { loginUser, updateUser, userUpdateSuccess } from '../actions/card.actions';

@Injectable()
export class UpdateUserEffects {
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser, loginUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map((user) => userUpdateSuccess({ user })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}

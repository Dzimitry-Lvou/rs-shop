import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const API_URL = 'http://localhost:3004';

export const USER_TOKEN_CONST_NAME = 'dl-rs-shop-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${API_URL}/users/login`, {
      login,
      password,
    });
  }

  registry(login: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${API_URL}/users/register`, {
      login,
      password,
    });
  }

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
}

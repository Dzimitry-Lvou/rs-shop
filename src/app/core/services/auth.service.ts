import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './apiUrl';

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
}

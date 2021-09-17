import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3004';

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

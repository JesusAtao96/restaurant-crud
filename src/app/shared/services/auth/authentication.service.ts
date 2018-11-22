import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppGlobals } from '../../../global';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(null);
  headers;

  constructor(private global: AppGlobals, private http: HttpClient) {
    this.checkToken();
  }

  setToken(data) {
    console.log('setToken', data.token)
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem('name', data.user.name);
    this.headers = { headers: new HttpHeaders().set('token', data.token) };
    this.authenticationState.next(true);
  }

  login(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/normal`, data);
  }

  register(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/users`, data);
  }

  facebook(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/facebook`, data);
  }

  google(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/google`, data);
  }

  updateUser(id, data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/user/${id}`, data);
  }

  logout() {
    localStorage.clear();
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    const token = localStorage.getItem(TOKEN_KEY);

    this.headers = { headers: new HttpHeaders().set('token', token) };
    if(token) {
      this.authenticationState.next(true);
    } else {
      this.authenticationState.next(false);
    }
  }

  async getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

}

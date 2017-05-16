import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../_models/user';
import * as properties from '../properties';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private BaseUrl = properties.baseUrl;  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  public login(username: string, password: string) {
    return this.http
      .post(`${this.BaseUrl}/usuario/autenticar`, JSON.stringify({ login: username, password: password }), { headers: this.headers })
      .map(response => {
        const user = response.json() as User;
        if (window.localStorage) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      });
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

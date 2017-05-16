import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ForgetService {

  private baseUrl: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  recordarPassword(email: string) {
    //console.log('aqui va la logica de recordar contraseña');
    return this.http.post(`${this.baseUrl}`, JSON.stringify({email: email}))
             .map(response => {
               console.log(`status: ${response.status}`);
             });
  }


}

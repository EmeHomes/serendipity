import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginURL = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

    login(userName, password): Observable<any> {
        return this.http.get(`${this.loginURL}/${userName}/${password}`);
    }
   
}

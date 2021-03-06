import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginURL = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }
    login(username, password): Observable<any> {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      return this.http.post(`${this.loginURL}`, formData);
    }
}

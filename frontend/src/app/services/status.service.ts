import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private URL = 'http://localhost:8080/status';

  constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(`${this.URL}`);
    }

}

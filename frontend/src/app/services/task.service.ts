import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private URL = 'http://localhost:8080/task';

  constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(`${this.URL}`);
    }
}

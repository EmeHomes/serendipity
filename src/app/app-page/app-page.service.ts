import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppPageService {

    private saludoUrl = 'http://localhost:8080/task';  // URL to web api

    constructor(private http: HttpClient) { }

    obtenerSaludo(): Observable<any> {
        return this.http.get(this.saludoUrl);
    }

}
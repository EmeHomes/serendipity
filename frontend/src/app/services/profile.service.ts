import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilePageComponent } from '../pages/app/profile-page/profile-page.component';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private usersAPI = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private sessionService: SessionService) { }

    find(): Observable<any> {
      const id = this.sessionService.id;
      return this.http.get(`${this.usersAPI}/1`);
    }

    save(profile: []): Observable<any> {
        return this.http.post<any>(this.usersAPI, profile);
    }
}

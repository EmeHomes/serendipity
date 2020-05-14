import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilePageComponent } from '../pages/app/profile-page/profile-page.component';
import { SessionService } from './session.service';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private usersAPI = 'http://localhost:8080/users';
  private updateUserAPI = 'http://localhost:8080/user';

  constructor(private http: HttpClient, private sessionService: SessionService) { }

    find(): Observable<any> {
      return this.http.get(`${this.usersAPI}/1`);
    }

    save(userForm: FormGroup, id: number): Observable<any> {
      const formData = new FormData();
      formData.append('name', userForm.get('name').value);
      formData.append('surname1', userForm.get('surname1').value);
      formData.append('surname2', userForm.get('surname2').value);
      formData.append('mail', userForm.get('mail').value);
      formData.append('password', userForm.get('password').value);

      return this.http.post<any>(`${this.updateUserAPI}/${id}`, formData);
    }

}

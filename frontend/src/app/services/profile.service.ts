import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfilePageComponent} from '../pages/app/profile-page/profile-page.component';
import {SessionService} from './session.service';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private usersAPI = 'http://localhost:8080/users';
  private updateUserAPI = 'http://localhost:8080/user';

  constructor(private http: HttpClient, private sessionService: SessionService) {
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.usersAPI}`);
  }

  find(id): Observable<any> {
    return this.http.get(`${this.usersAPI}/${id}`);
  }

  save(userForm: FormGroup, id: number): Observable<any> {
    const formData = new FormData();
    formData.append('name', userForm.get('name').value);
    formData.append('surname1', userForm.get('surname1').value);
    formData.append('surname2', userForm.get('surname2').value);
    formData.append('mail', userForm.get('mail').value);
    formData.append('image', userForm.get('image').value);
    formData.append('password', userForm.get('password').value);
    formData.append('role_id', userForm.get('role_id').value);

    return this.http.post<any>(`${this.updateUserAPI}/${id}`, formData);
  }

  new(userForm: FormGroup): Observable<any> {
    const formData = new FormData();
    formData.append('name', userForm.get('name').value);
    formData.append('surname1', userForm.get('surname1').value);
    formData.append('surname2', userForm.get('surname2').value);
    formData.append('mail', userForm.get('mail').value);
    formData.append('image', userForm.get('image').value);
    formData.append('password', userForm.get('password').value);
    formData.append('role_id', userForm.get('role_id').value);
    formData.append('username', userForm.get('username').value);

    return this.http.post<any>(`${this.usersAPI}`, formData);
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.updateUserAPI}/${id}`);
  }
}

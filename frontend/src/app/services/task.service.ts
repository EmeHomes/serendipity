import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TaskModel} from '../models/task.model';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private URL = 'http://localhost:8080/task';

  constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(`${this.URL}`);
    }

    find(id): Observable<any> {
      return this.http.get(`${this.URL}/${id}`);
    }

    findByUser(idUser): Observable<any> {
      return this.http.get(`${this.URL}/user/${idUser}`);
    }

  save(taskForm: FormGroup, id: number): Observable<any> {
    const formData = new FormData();
    formData.append('name', taskForm.get('name').value);
    formData.append('description', taskForm.get('description').value);
    formData.append('status_id', taskForm.get('status_id').value);
    formData.append('start_date', taskForm.get('start_date').value);
    formData.append('finish_date', taskForm.get('finish_date').value);
    formData.append('user_id', taskForm.get('user_id').value);

    return this.http.post<any>(`${this.URL}/${id}`, formData);
  }

  new(taskForm: FormGroup): Observable<any> {
    const formData = new FormData();
    formData.append('name', taskForm.get('name').value);
    formData.append('description', taskForm.get('description').value);
    formData.append('status_id', taskForm.get('status_id').value);
    formData.append('start_date', taskForm.get('start_date').value);
    formData.append('finish_date', taskForm.get('finish_date').value);
    formData.append('user_id', taskForm.get('user_id').value);

    return this.http.post<any>(`${this.URL}`, formData);
  }
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

}

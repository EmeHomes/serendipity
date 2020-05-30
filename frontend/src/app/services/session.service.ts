
import { Injectable } from '@angular/core';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  user: UserModel;
  errorMessage;
  successMessage;

  clearAlerts() {
    this.errorMessage   = '';
    this.successMessage = ''
  }
}

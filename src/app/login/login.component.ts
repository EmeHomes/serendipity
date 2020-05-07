import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  
  constructor(private router: Router, private loginService: LoginService, private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  loginCheck() {
    this.loginService.login(this.userName, this.password).subscribe(res => {
      if(res && res.token) {
        this.sessionService.token = res.token;
        this.router.navigate(['user-view']);
        return;
      }
      alert('Datos incorrectos');

    });
    //
  }

}

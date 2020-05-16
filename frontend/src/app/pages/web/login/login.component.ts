import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  navigateToProfile() {
    this.router.navigate(['profile-page/' + 1]);
  }
/*
  loginCheck() {
    this.loginService.login(this.userName, this.password).subscribe(res => {
      if (res && res.token) {

        this.sessionService.token = res.token;
        this.sessionService.id    = res.id;

        this.router.navigate(['user-view']);
        return;
      }
      alert('Datos incorrectos');
    });
  }
*/
}

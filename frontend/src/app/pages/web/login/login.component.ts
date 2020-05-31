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

  username: string;
  password: string;
  errorMessage;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  loginCheck() {
    this.loginService.login(this.username, this.password).subscribe(user => {
      if (user) {
        this.sessionService.user = user;
        this.router.navigate(['user-view']);
        return;
      }
      this.errorMessage = 'Los datos son incorrectos';
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  logout() {
    this.sessionService.token = "";
    this.router.navigate(['login']);
  }

}

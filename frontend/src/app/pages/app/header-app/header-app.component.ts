import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
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
    this.router.navigate(['login']);
  }

  scrollTo(elementId: string): void {
    if ('top' === elementId ) {
      top.scrollTo(0, 0);
    }

    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: 'smooth'});
}

}

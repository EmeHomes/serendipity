import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../../services/session.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../../services/profile.service';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {
  userId;
  userRole;

  constructor(
    private router: Router,
    private sessionService: SessionService) {}

  ngOnInit(): void {
    this.userId = this.sessionService.user.id;
    this.userRole = this.sessionService.user.role.id;
  }

  logout() {
    this.sessionService.user = null;
    this.router.navigate(['login']);
  }

  scrollTo(elementId: string): void {
    if ('top' === elementId) {
      top.scrollTo(0, 0);
    }

    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: 'smooth'});
  }

  navigateToProfile() {
    this.router.navigate(['profile-page/' + this.userId]);
  }

}

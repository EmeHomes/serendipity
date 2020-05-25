import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {SessionService} from './session.service';

@Injectable()
export class AuthorizatedGuard implements CanActivate {

  constructor(private router: Router, private sessionService: SessionService) {

  }

  canActivate() {
    if (this.sessionService.user) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

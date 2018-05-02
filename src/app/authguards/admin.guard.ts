import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authser: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( /*Some condition to activate router */ this.authser.adminLogin == true) {
        return true;
    }
    else {
        this.router.navigate(['/login']);
    }
}
}
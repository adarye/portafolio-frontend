import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {
  isAuth = {}
  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this.authService.observableToken().pipe(map((response) => {

      if (response) {
        return true;
      }
      else{
        this.router.navigate(['/auth']);
        return false;

      }
    }), catchError((error) => {
      this.router.navigate(['/auth']);
      return of(false);
    }));

  }


}

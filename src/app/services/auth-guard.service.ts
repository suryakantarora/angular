import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private router: Router
  ) { }
  canActivate() {
    if (localStorage.getItem('SESSIONID')) {
      console.log("Logged IN")
      return true;
    }
    console.log("Logged Out")
    this.router.navigate(['/login']);
    return false;
  }
  canActivateChild() {
    return this.canActivate();
  }
}

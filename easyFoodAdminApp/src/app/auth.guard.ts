import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./_services/auth.service";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authSvc: AuthService, public _router: Router) {}

  canActivate(): boolean {
    if (this._authSvc.loggedIn()) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      this._router.navigate(["/login"]);
      return false;
    }
  }
}

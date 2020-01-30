import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  private _registerUrl = "https://easyfoodcdac.herokuapp.com/admins/register";
  private _loginUrl = "https://easyfoodcdac.herokuapp.com/admins/login";

  constructor(private http: HttpClient, private _router: Router) {}

  user;
  setUser(u) {
    this.user = u;
  }

  registerUser(user) {
    let admin = {
      adminEmail: user.userEmail,
      adminPassword: user.userPassword,
      adminName: user.userName,
      adminPhone: user.userPhone,
      adminOrg: user.userOrg,
      adminOrgId: user.userOrgId
    };
    console.log(admin);
    return this.http.post<any>(this._registerUrl, admin);
  }

  loginUser(user) {
    let myFormData = new FormData();
    myFormData.append("email", user.email);
    myFormData.append("password", user.password);

    console.log(this._loginUrl, user);
    return this.http.post<any>(this._loginUrl, myFormData);
  }

  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("userdetails");
    this._router.navigate(["/login"]);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getUserDetails() {
    return localStorage.getItem("userdetails");
    //console.log(this.user);
    //return this.user;
  }
}

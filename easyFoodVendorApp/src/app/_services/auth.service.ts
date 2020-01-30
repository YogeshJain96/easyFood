import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  private _registerUrl = "https://easyfoodcdac.herokuapp.com/vendors/register";
  private _loginUrl = "https://easyfoodcdac.herokuapp.com/vendors/login";

  constructor(private http: HttpClient, private _router: Router) {}

  user;
  setUser(u) {
    this.user = u;
  }

  registerUser(user) {
    let vendor = {
      vendorEmail: user.userEmail,
      vendorPassword: user.userPassword,
      vendorName: user.userName,
      vendorPhone: user.userPhone,
      vendorOrgId: user.userOrgId,
      vendorOrg: user.userOrg
    };
    return this.http.post<any>(this._registerUrl, vendor);
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

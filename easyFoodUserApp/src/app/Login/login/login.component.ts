import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserData = { email: "", password: "" };
  errFlag = false;
  msg = "";
  loader = false;
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  loginUser() {
    let validEmail = this.validateEmail(this.loginUserData.email);
    if (validEmail) {
      this.loader = true;
      console.log(this.loginUserData);
      this._auth.loginUser(this.loginUserData).subscribe(
        res => {
          console.log(res);
          if (res.success) {
            localStorage.setItem("token", res.result.token);
            localStorage.setItem("userdetails", JSON.stringify(res.result));
            this._auth.setUser(JSON.stringify(res.result));
            this._router.navigate(["/dashboard"]);
          } else {
            this.errFlag = true;
            this.loader = false;
            this.msg = res.message;
          }
        },
        err => console.log(err)
      );
    } else {
      this.errFlag = true;
      this.msg = "Enter Valid Email";
    }
  }

  validateEmail(elementValue) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }

  errClear() {
    this.errFlag = false;
  }
}

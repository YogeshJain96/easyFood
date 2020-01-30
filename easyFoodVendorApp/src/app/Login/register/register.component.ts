import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    userEmail: "",
    userPassword: "",
    userName: "",
    userPhone: "",
    userOrgId: "",
    userOrg: ""
  };
  msg = "";
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  checkValidation() {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let alertMsg = "";
    let phone = "" + this.registerUserData.userPhone;
    let name = this.registerUserData.userName;
    if (name.length == 0) alertMsg += "Name is Required!\n";
    if (!emailPattern.test(this.registerUserData.userEmail))
      alertMsg += "Invalid Email! \n";
    if (phone.length != 10)
      alertMsg += "Phone number should be 10 digits long! \n";
    if (this.registerUserData.userPassword.length < 5)
      alertMsg += "Password should be of atleast length 5!\n";
    if (this.registerUserData.userOrg.length == 0)
      alertMsg += "Organization Name is Required!\n";
    if (this.registerUserData.userOrgId.length == 0)
      alertMsg += "OrganizationId is Required!\n";

    if (alertMsg.length > 0) {
      alert(alertMsg);
      return false;
    } else return true;
  }
  registerUser() {
    if (this.checkValidation()) {
      console.log(this.registerUserData);
      this._auth.registerUser(this.registerUserData).subscribe(
        res => {
          console.log(res);
          //localStorage.setItem("token", res.token);
          if (res.success) {
            this._router.navigate(["/login"]);
            this.msg =
              "Registeration Successful! Kindly login with your credentials!";
          } else {
            this.msg = "Registeration Failed";
          }
          alert(this.msg);
        },
        err => console.log(err)
      );
    }
  }
}

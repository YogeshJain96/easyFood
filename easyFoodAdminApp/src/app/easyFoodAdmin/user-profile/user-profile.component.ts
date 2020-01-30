import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  userDetails: any = {
    id: "",
    email: "",
    name: "",
    organisationName: "",
    organisationId: "",
    phone: ""
  };
  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this.userDetails = JSON.parse(this._auth.getUserDetails());
    console.log(this.userDetails);
  }
}

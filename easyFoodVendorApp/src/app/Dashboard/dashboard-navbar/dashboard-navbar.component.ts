import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-dashboard-navbar",
  templateUrl: "./dashboard-navbar.component.html",
  styleUrls: ["./dashboard-navbar.component.css"]
})
export class DashboardNavbarComponent implements OnInit {
  constructor(private _auth: AuthService) {}

  ngOnInit() {}
  logoutuser() {
    console.log("Logout Clicked");
    this._auth.logoutUser();
  }
}

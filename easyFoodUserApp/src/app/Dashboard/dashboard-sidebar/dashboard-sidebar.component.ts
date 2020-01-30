import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-dashboard-sidebar",
  templateUrl: "./dashboard-sidebar.component.html",
  styleUrls: ["./dashboard-sidebar.component.css"]
})
export class DashboardSidebarComponent implements OnInit {
  userName = "userName";
  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this.userName = JSON.parse(this._auth.getUserDetails()).name;
  }
  logoutuser() {
    console.log("Logout Clicked");
    this._auth.logoutUser();
  }
}

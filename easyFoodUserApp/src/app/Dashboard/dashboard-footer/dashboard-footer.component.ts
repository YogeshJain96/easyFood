import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/_services/notification.service";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-dashboard-footer",
  templateUrl: "./dashboard-footer.component.html",
  styleUrls: ["./dashboard-footer.component.css"]
})
export class DashboardFooterComponent implements OnInit {
  constructor(
    private notification: NotificationService,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    // let userId = JSON.parse(this._auth.getUserDetails()).id;
    // console.log(userId);
    // this.notification.getOrderLiveStatus(userId).subscribe(data => {
    //   console.log("orderlive", JSON.parse(data.toString()));
    //   console.log(data);
    // });
    // this.notification.getTime().subscribe(time => {
    //   console.log("getting time", time);
    // });
  }
}

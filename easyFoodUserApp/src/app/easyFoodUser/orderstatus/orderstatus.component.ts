import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/_services/auth.service";
import { NotificationService } from "src/app/_services/notification.service";

@Component({
  selector: "app-orderstatus",
  templateUrl: "./orderstatus.component.html",
  styleUrls: ["./orderstatus.component.css"]
})
export class OrderstatusComponent implements OnInit {
  orderId = 1;
  orderStatus = {
    orderId: "",
    orderItems: [{ items: "" }],
    orderDelivered: false,
    orderTotal: 0,
    orderReady: ""
  };
  items;
  constructor(
    private notification: NotificationService,
    private _auth: AuthService,
    private _eFSvc: EasyFoodService,
    private _router: Router
  ) {}

  ngOnInit() {
    let userId = JSON.parse(this._auth.getUserDetails()).id;
    console.log(userId);
    this.notification.getOrderLiveStatus(userId).subscribe(data => {
      console.log("orderlive", JSON.parse(data.toString()));
      console.log(data);
      this.refresh();
    });
    this.notification.getTime().subscribe(time => {
      console.log("getting time", time);
    });

    console.log("getOrderStatus", this._eFSvc.getOrderStatus());
    this.orderId = this._eFSvc.getOrderStatus().orderId;
    console.log("orderId", this.orderId);
    this._eFSvc.getOrderById(this.orderId).subscribe(
      res => {
        console.log(res);
        this.orderStatus = res.data;
        console.log(this.orderStatus);
        this.items = this.orderStatus.orderItems[0].items;
      },
      err => console.log(err)
    );
    // this.orderStatus = this._eFSvc.getOrderStatus();
    // if (this.orderStatus == null) this._router.navigate(["/orderhistory"]);
    // if (
    //   this._eFSvc.getOrderStatus() != null &&
    //   this._eFSvc.getOrderStatus().orderItems.length > 0
    // )
    //   this.items = this.orderStatus.orderItems[0].items;
    // console.log(this.orderStatus);
  }
  refresh() {
    this._eFSvc.getOrderById(this.orderId).subscribe(
      res => {
        console.log(res);
        this.orderStatus = res.data;
        this.items = this.orderStatus.orderItems[0].items;
        if (this.orderStatus.orderDelivered)
          localStorage.setItem("isOrderLive", JSON.stringify(false));
      },
      err => console.log(err)
    );

    console.log("refresh", this.orderStatus);
  }
}

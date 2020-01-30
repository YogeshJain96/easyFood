import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "src/app/_services/easy-food.service";
import { AuthService } from "src/app/_services/auth.service";
import { NotificationService } from "src/app/_services/notification.service";

@Component({
  selector: "app-currentorder",
  templateUrl: "./currentorder.component.html",
  styleUrls: ["./currentorder.component.css"]
})
export class CurrentorderComponent implements OnInit {
  vendorId = "";
  currentOrders;
  newOrder;
  constructor(
    private notification: NotificationService,
    private _auth: AuthService,
    private _eFSvc: EasyFoodService
  ) {}

  ngOnInit() {
    this.newOrder = false;
    this.vendorId = JSON.parse(this._auth.getUserDetails()).id;

    console.log(this.vendorId);
    this.notification.getNewOrder(this.vendorId).subscribe(data => {
      console.log(data);
      this.refresh();
    });
    this.notification.getTime().subscribe(time => {
      console.log("getting time", time);
    });

    this._eFSvc.getAllOrders(this.vendorId).subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          this.currentOrders = res.data.reverse();
          this.newOrder = true;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  refresh() {
    this._eFSvc.getAllOrders(this.vendorId).subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          this.currentOrders = res.data.reverse();
          this.newOrder = true;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  orderReady(order) {
    order.orderReady = true;
    let data = {
      orderId: parseInt(order.orderId),
      orderReady: true
    };
    this._eFSvc.setOrderStatus(data).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
  orderDelivered(order) {
    order.orderDelivered = true;
    let data = {
      orderId: parseInt(order.orderId),
      orderDelivered: true
    };
    this._eFSvc.setOrderStatus(data).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-orderhistory",
  templateUrl: "./orderhistory.component.html",
  styleUrls: ["./orderhistory.component.css"]
})
export class OrderhistoryComponent implements OnInit {
  constructor(private _eFSvc: EasyFoodService, private _auth: AuthService) {}
  vendorId = "";
  orderHisory = [];
  msg;
  orderDetails;
  ngOnInit() {
    this.vendorId = JSON.parse(this._auth.getUserDetails()).id;
    this._eFSvc.getAllOrders(this.vendorId).subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          this.orderHisory = res.data.reverse();
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  viewOrderDetails(order) {
    console.log(order);
    this.orderDetails = order;
  }
}

import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";

@Component({
  selector: "app-orderhistory",
  templateUrl: "./orderhistory.component.html",
  styleUrls: ["./orderhistory.component.css"]
})
export class OrderhistoryComponent implements OnInit {
  orderHisory = [];
  msg;
  orderDetails;
  constructor(private _eFSvc: EasyFoodService) {}

  ngOnInit() {
    this._eFSvc.getOrderHistory().subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          this.orderHisory = res.data;
          console.log(this.orderHisory);
        } else this.msg = res.message;
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

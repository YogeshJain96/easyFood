import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-orderhistory",
  templateUrl: "./orderhistory.component.html",
  styleUrls: ["./orderhistory.component.css"]
})
export class OrderhistoryComponent implements OnInit {
  orderHisory = [];
  msg = "";
  liveOrder;
  constructor(private _eFSvc: EasyFoodService, private _auth: AuthService) {}

  ngOnInit() {
    this.liveOrder = this._eFSvc.isLiveOrder();
    console.log("liveorder", this.liveOrder);
    this._eFSvc
      .getOrderHistory(JSON.parse(this._auth.getUserDetails()).id)
      .subscribe(
        res => {
          this.msg = res.message;
          console.log(res);
          if (!res.error) this.orderHisory = res.data.reverse();
          console.log(this.orderHisory);
        },
        err => console.log(err)
      );
    console.log(this.orderHisory);
  }
  orderDetails;
  viewOrderDetails(order) {
    console.log(order);
    this.orderDetails = order;
  }
  saveRating(order, rating) {
    order.orderRating = rating;
    let data = {
      orderId: order.orderId,
      rating: order.orderRating
    };
    // console.log(data);
    this._eFSvc.setOrderRating(data).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}

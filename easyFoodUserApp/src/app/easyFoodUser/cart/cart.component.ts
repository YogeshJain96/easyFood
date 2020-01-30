import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";
import { AuthService } from "../../_services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  cartTotal = 0;
  emptyCart = true;
  vendorId = "";
  msg = "";
  constructor(
    private _eFSvc: EasyFoodService,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.emptyCart = true;
    this.cartItems = [];
    if (this._eFSvc.getCartItems() != null) {
      this.emptyCart = false;
      this.vendorId = this._eFSvc.getCartItems().vendorId;
      this.cartItems = this._eFSvc.getCartItems().items;

      this.cartItems.forEach(item => {
        this.cartTotal = this.cartTotal + item.itemQty * item.itemUnitPrice;
      });
    }
  }

  proceedToPay() {
    let userId = JSON.parse(this._auth.getUserDetails()).id;
    let order = {
      userId: userId,
      cart: [
        {
          vendorId: this.vendorId,
          vendorName: "easyFood",
          items: this.cartItems
        }
      ]
    };
    let getStatus = data => {
      this._eFSvc.setOrderStatus(data);
      this._router.navigate(["/orderstatus"]);
    };
    this._eFSvc.proceedToPay(order).subscribe(
      data => {
        console.log(data);
        if (!data.error) {
          getStatus(data.data);
          this._eFSvc.emptyCartItems();
          this.cartItems = [];
          this.emptyCart = true;
        } else {
          this.msg = data.message;
        }
      },
      err => console.log(err)
    );
  }
}

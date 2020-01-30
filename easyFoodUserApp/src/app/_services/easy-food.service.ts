import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable()
export class EasyFoodService {
  //Recharge Wallet
  private _userwalletUrl =
    "https://easyfoodcdac.herokuapp.com/users/wallet?id=";
  private _rechargeHistoryUrl =
    "https://easyfoodcdac.herokuapp.com/users/rechargehistory?userId="; //get recharge history

  //Find Your Food
  private _vendorListUrl = "https://easyfoodcdac.herokuapp.com/vendors/list";
  private _menuItemListUrl =
    "https://easyfoodcdacnode.herokuapp.com/vendors/getMenus?id=";

  //Orders
  private _placeOrderUrl =
    "https://easyfoodcdacnode.herokuapp.com/users/placeOrder"; //post
  private _ordersHistoryUrl =
    "https://easyfoodcdacnode.herokuapp.com/users/order?userId="; //get all orders

  private _orderRatingUrl =
    "https://easyfoodcdacnode.herokuapp.com/user/orderrating"; //post all orderId,ratings

  private _orderByIdUrl =
    "https://easyfoodcdacnode.herokuapp.com/user/orderbyid?orderId=";

  orderStatus;
  isOrderLive = false;
  constructor(private http: HttpClient, private _router: Router) {}

  getVendorList() {
    console.log("getVendorList");
    return this.http.get<any>(this._vendorListUrl);
  }

  getMenuItemList(id) {
    console.log("get menu id of vendor ", id);
    return this.http.get<any>(this._menuItemListUrl + id);
  }

  getWalletBalance(id) {
    return this.http.get<any>(this._userwalletUrl + id);
  }
  tempCartData;
  addToCart(_tempCartData) {
    this.tempCartData = _tempCartData;
    this._router.navigate(["/cart"]);
  }

  getCartItems() {
    return this.tempCartData;
  }
  emptyCartItems() {
    this.tempCartData = null;
  }

  proceedToPay(order) {
    console.log(order);
    return this.http.post<any>(this._placeOrderUrl, order);
  }
  getOrderHistory(id) {
    return this.http.get<any>(this._ordersHistoryUrl + id);
  }
  setOrderRating(data) {
    console.log(data);
    return this.http.post<any>(this._orderRatingUrl, data);
  }
  setOrderStatus(data) {
    this.orderStatus = data;
    localStorage.setItem("orderstatus", JSON.stringify(data));
    localStorage.setItem("isOrderLive", JSON.stringify(true));
  }
  getOrderById(orderid) {
    return this.http.get<any>(this._orderByIdUrl + orderid);
  }
  getOrderStatus() {
    return JSON.parse(localStorage.getItem("orderstatus"));
  }
  isLiveOrder() {
    return JSON.parse(localStorage.getItem("isOrderLive"));
  }
  getRechargeHistory(id) {
    return this.http.get<any>(this._rechargeHistoryUrl + id);
  }
}

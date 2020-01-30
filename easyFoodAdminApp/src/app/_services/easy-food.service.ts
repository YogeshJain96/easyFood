import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable()
export class EasyFoodService {
  private _orderHistoryUrl =
    "https://easyfoodcdacnode.herokuapp.com/admin/orders";
  private _rechargeUrl = "https://easyfoodcdac.herokuapp.com/admin/recharge";
  private _rechargeHistoryUrl =
    "https://easyfoodcdac.herokuapp.com/admin/rechargehistory";
  private _getTodayOrdersUrl =
    "https://easyfoodcdacnode.herokuapp.com/admin/today";
  private _getReportsUrl =
    "https://easyfoodcdacnode.herokuapp.com/admin/byrange";

  constructor(private http: HttpClient, private _router: Router) {}

  recharge(details) {
    console.log(details);
    let myFormData = new FormData();
    myFormData.append("adminId", details.adminId);
    myFormData.append("userId", details.userId);
    myFormData.append("amount", details.amount);

    console.log(this._rechargeUrl, myFormData);

    return this.http.post<any>(this._rechargeUrl, myFormData);
  }
  getRechargeHistory() {
    return this.http.get<any>(this._rechargeHistoryUrl);
  }
  getOrderHistory() {
    return this.http.get<any>(this._orderHistoryUrl);
  }
  getTodayOrderData() {
    return this.http.get<any>(this._getTodayOrdersUrl);
  }
  generateReport(fromDate, toDate) {
    return this.http.get<any>(
      this._getReportsUrl + "?from=" + fromDate + "&to=" + toDate
    );
  }
}

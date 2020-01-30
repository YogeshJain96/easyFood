import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable()
export class EasyFoodService {
  private _orderListUrl =
    "https://easyfoodcdacnode.herokuapp.com/vendor/orders?vendorId=";
  private _orderUpdateUrl =
    "https://easyfoodcdacnode.herokuapp.com/vendor/updateorder";

  private _menuItemListUrl =
    "https://easyfoodcdacnode.herokuapp.com/vendors/getMenus?id=";
  private _menuItemUpdate =
    "https://easyfoodcdacnode.herokuapp.com/vendors/addMenus";

  constructor(private http: HttpClient, private _router: Router) {}
  getCurrentOrders(id) {
    console.log("get orders of vendor ", id);
    return this.http.get<any>(this._orderListUrl + id);
  }
  getAllOrders(id) {
    console.log("get orders of vendor ", id);
    return this.http.get<any>(this._orderListUrl + id);
  }

  getMenuItemList(id) {
    console.log("get menu id of vendor ", id);
    return this.http.get<any>(this._menuItemListUrl + id);
  }

  updateMenuItems(data) {
    console.log("updated menu posting", data);

    console.log(data);
    return this.http.post<any>(this._menuItemUpdate, data);
  }

  setOrderStatus(data) {
    console.log(data);
    return this.http.post<any>(this._orderUpdateUrl, data);
  }
}

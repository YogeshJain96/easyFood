import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  fact = "Your Diet is a bank account! Good Food choices are good investments!";
  totalOrdersToday = 0;
  revenueToday = 0;
  constructor(private _eFSvc: EasyFoodService, private _router: Router) {}

  ngOnInit() {
    this._eFSvc.getTodayOrderData().subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          this.totalOrdersToday = res.data.orders;
          this.revenueToday = res.data.total;
        }
      },
      err => {}
    );
  }
}

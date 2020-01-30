import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";
import { EasyFoodService } from "../../_services/easy-food.service";

@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styleUrls: ["./recharge.component.css"]
})
export class RechargeComponent implements OnInit {
  walletBalance = 0;
  rechargeHisory = [];
  constructor(private _auth: AuthService, private _eFSvc: EasyFoodService) {}

  ngOnInit() {
    let userId = JSON.parse(this._auth.getUserDetails()).id;
    this._eFSvc.getWalletBalance(userId).subscribe(
      res => {
        console.log(res);
        if (res.success) {
          this.walletBalance = res.result.balance;
        }
      },
      err => console.log(err)
    );
    this._eFSvc.getRechargeHistory(userId).subscribe(
      res => {
        console.log(res);
        if (res.success) this.rechargeHisory = res.result;
        console.log(this.rechargeHisory);
      },
      err => console.log(err)
    );
  }
}

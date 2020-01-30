import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";
import { EasyFoodService } from "../../_services/easy-food.service";

@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styleUrls: ["./recharge.component.css"]
})
export class RechargeComponent implements OnInit {
  rechargeDetails = {
    adminId: "",
    userId: "",
    amount: ""
  };
  rechargeMsg = "";

  msg = "Accept Cash & Recharge";
  constructor(private _eFSvc: EasyFoodService, private _auth: AuthService) {}
  ngOnInit() {
    this.rechargeDetails.adminId = JSON.parse(this._auth.getUserDetails()).id;
  }

  recharge() {
    this._eFSvc.recharge(this.rechargeDetails).subscribe(
      res => {
        console.log(res);
        if (res.success) {
          this.rechargeMsg = "Recharge Successfull !!";
          this.msg = "";
          this.rechargeDetails.userId = "";
          this.rechargeDetails.amount = "";
        } else {
          this.msg = res.message;
          this.rechargeMsg = "";
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}

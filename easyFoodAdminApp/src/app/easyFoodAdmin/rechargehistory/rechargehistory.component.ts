import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";

@Component({
  selector: "app-rechargehistory",
  templateUrl: "./rechargehistory.component.html",
  styleUrls: ["./rechargehistory.component.css"]
})
export class RechargehistoryComponent implements OnInit {
  rechargeHistory = [];
  errMsg = "";
  constructor(private _eFSvc: EasyFoodService) {}

  ngOnInit() {
    this._eFSvc.getRechargeHistory().subscribe(
      res => {
        console.log(res);
        if (res.success) {
          this.rechargeHistory = res.result;
          console.log(this.rechargeHistory);
        } else {
          this.errMsg = res.message;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}

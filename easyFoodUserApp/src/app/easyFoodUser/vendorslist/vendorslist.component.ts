import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";

@Component({
  selector: "app-vendorslist",
  templateUrl: "./vendorslist.component.html",
  styleUrls: ["./vendorslist.component.css"]
})
export class VendorslistComponent implements OnInit {
  vendorList: any;
  vendorId = 1;
  val: number = 0;
  constructor(private _eFSvc: EasyFoodService) {}

  ngOnInit() {
    this._eFSvc.getVendorList().subscribe(
      res => {
        console.log(res);
        //console.log(res.result);
        this.vendorList = res.result;
      },
      err => console.log(err)
    );
  }
  loadMenu(vid) {
    console.log(vid);
    this.vendorId = vid;
  }
}

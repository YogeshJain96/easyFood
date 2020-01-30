import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";

@Component({
  selector: "app-generatereport",
  templateUrl: "./generatereport.component.html",
  styleUrls: ["./generatereport.component.css"]
})
export class GeneratereportComponent implements OnInit {
  msg;
  fromDate = new Date().toJSON().slice(0, 10);
  toDate = new Date().toJSON().slice(0, 10);
  report = [];
  genReport = false;
  constructor(private _eFSvc: EasyFoodService) {}

  ngOnInit() {
    this.report = [];
    this.genReport = false;
  }
  generateReport() {
    if (this.fromDate > this.toDate) this.msg = "Invalid Date Range";
    else {
      this.genReport = true;
      this.msg = "";
      console.log(this.fromDate, this.toDate);
      this._eFSvc.generateReport(this.fromDate, this.toDate).subscribe(
        res => {
          console.log(res);
          if (!res.error) {
            this.report = res.data;
            console.log(this.report);
          } else this.msg = res.message;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  print() {
    console.log("PrintPDF");
    window.print();
  }
}

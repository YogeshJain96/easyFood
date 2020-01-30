import { Component, OnInit } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-menuitems",
  templateUrl: "./menuitems.component.html",
  styleUrls: ["./menuitems.component.css"]
})
export class MenuitemsComponent implements OnInit {
  menuitems: any = [];
  vendorId;
  val: number = 0;
  itemLastId = 0;
  newItem = {
    itemId: 0,
    itemImgUrl: "url",
    itemName: "",
    itemUnitPrice: 0,
    itemAvailability: true
  };
  msg;
  errAddMsg;
  constructor(private _auth: AuthService, private _eFSvc: EasyFoodService) {}
  ngOnInit() {
    this.vendorId = JSON.parse(this._auth.getUserDetails()).id;
    this._eFSvc.getMenuItemList(this.vendorId).subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          console.log(res.data);

          if (res.data != null) {
            this.menuitems = res.data;
            console.log("menuitems", this.menuitems);
            const l = this.menuitems.length;
            this.itemLastId = this.menuitems[l - 1].itemId;
          } else this.itemLastId = 1;
        }
      },
      err => console.log(err)
    );
  }

  updateItem(item, availablity) {
    this.menuitems.forEach(i => {
      if (item.itemId == i.itemId) {
        i.itemAvailability = availablity;
      }
    });

    console.log("item updated", item);
    console.log("menuItems", this.menuitems);
  }
  addNewItem() {
    console.log(this.newItem.itemName.length);
    if (this.newItem.itemName.length > 1 && this.newItem.itemUnitPrice > 0) {
      let newItemToAdd = {
        itemId: ++this.itemLastId,
        itemImgUrl: "url",
        itemName: this.newItem.itemName,
        itemUnitPrice: this.newItem.itemUnitPrice,
        itemAvailability: true
      };
      this.menuitems.push(newItemToAdd);

      console.log("AddedNewItem", newItemToAdd);
      this.newItem.itemName = "";
      this.newItem.itemUnitPrice = 0;
      this.msg = "New Item Added Successfully!!";
      this.errAddMsg = "";
      console.log(this.menuitems);
    } else this.errAddMsg = "Pls write valid item name & unit price";
  }

  saveMenu() {
    let updatedMenu = {
      vendorId: parseInt(this.vendorId),
      menuItems: this.menuitems
    };
    this._eFSvc.updateMenuItems(updatedMenu).subscribe(
      data => {
        console.log(data);
        if (!data.error) this.msg = "Menu Added Successfully!!";
        else this.msg = data.message;
      },
      err => console.log(err)
    );
  }
}

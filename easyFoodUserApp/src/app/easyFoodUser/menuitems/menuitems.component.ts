import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { EasyFoodService } from "../../_services/easy-food.service";

@Component({
  selector: "app-menuitems",
  templateUrl: "./menuitems.component.html",
  styleUrls: ["./menuitems.component.css"]
})
export class MenuitemsComponent implements OnInit, OnChanges {
  @Input() vendorId;
  val: number = 0;
  menuitems: any = [];
  cartitems: any = {};
  cartEmpty = true;
  carttotal = 0;
  constructor(private _eFSvc: EasyFoodService) {}
  ngOnChanges() {
    this.carttotal = 0;
    console.log("changed", this.vendorId);
    this.cartEmpty = true;
    this.cartitems = {
      vendorId: this.vendorId,
      items: []
    };

    this._eFSvc.getMenuItemList(this.vendorId).subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          console.log(res.data);
          this.menuitems = res.data;
          this.menuitems.forEach(item => {
            item.itemQty = 0;
          });
          console.log("final menuitems", this.menuitems);
        }
      },
      err => console.log(err)
    );
  }
  ngOnInit() {
    this.cartEmpty = true;
    this.cartitems = {
      vendorId: this.vendorId,
      items: [
        // { itemId: 1, itemName: "Poha", itemUnitPrice: 20, itemQty: 2 },
        // { itemId: 2, itemName: "Idli", itemUnitPrice: 30, itemQty: 1 }
      ]
    };

    this._eFSvc.getMenuItemList(1).subscribe(
      res => {
        console.log(res);
        if (!res.error) {
          console.log(res.data);
          this.menuitems = res.data;
          this.menuitems.forEach(item => {
            item.itemQty = 0;
          });
          console.log("final menuitems", this.menuitems);
        }
      },
      err => console.log(err)
    );
  }
  AddToCart() {
    console.log("adding to cart", this.cartitems);
    this._eFSvc.addToCart(this.cartitems);
  }

  addItmQty(item) {
    this.cartEmpty = false;
    item.itemQty++;
    let itemFound = false;
    this.cartitems.items.forEach(i => {
      if (item.itemId == i.itemId) {
        itemFound = true;
        i.itemQty++;
      }
    });

    if (!itemFound) {
      this.cartitems.items.push({
        itemId: item.itemId,
        itemName: item.itemName,
        itemUnitPrice: item.itemUnitPrice,
        itemQty: 1
      });
    }
    this.carttotal += item.itemUnitPrice;
    console.log("item added", item);
    console.log("cartItems", this.cartitems.items);
  }
  removeItmQty(item) {
    item.itemQty--;
    let itemFound = false;
    let index = 0;
    this.cartitems.items.forEach(i => {
      if (item.itemId == i.itemId) {
        itemFound = true;
        if (i.itemQty > 0) i.itemQty--;

        if (i.itemQty == 0) {
          this.cartitems.items.splice(index, 1);
        }
      }
      index++;
    });

    if (!itemFound) {
      this.cartitems.items.push({
        itemId: item.itemId,
        itemName: item.itemName,
        itemUnitPrice: item.itemUnitPrice,
        itemQty: 1
      });
    }
    this.carttotal -= item.itemUnitPrice;
    console.log("item removed", item);
    console.log("cartItems", this.cartitems);
  }
}

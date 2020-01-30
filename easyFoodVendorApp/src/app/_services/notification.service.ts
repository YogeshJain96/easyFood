import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";

@Injectable()
export class NotificationService {
  private url = "https://easyfoodcdacnode.herokuapp.com/";
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  getTime() {
    let observable = new Observable(observer => {
      this.socket.on("time", timeString => {
        // console.log(timeString);
        observer.next(timeString);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    console.log(observable);
    return observable;
  }
  getNewOrder(id) {
    let observable = new Observable(observer => {
      this.socket.on("/vendor/" + id + "/orderupdate", data => {
        // console.log("orderupdate", data);
        observer.next("new order");
      });
      return () => {
        this.socket.disconnect();
      };
    });
    console.log(observable);
    return observable;
  }
}

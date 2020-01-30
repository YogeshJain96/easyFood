import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { AuthGuard } from "./auth.guard";

import { LoginComponent } from "./Login/login/login.component";
import { RegisterComponent } from "./Login/register/register.component";
import { LoginFooterComponent } from "./Login/login-footer/login-footer.component";
import { LoginNavbarComponent } from "./Login/login-navbar/login-navbar.component";

import { EasyFoodService } from "./_services/easy-food.service";
import { AuthService } from "./_services/auth.service";
import { NotificationService } from "./_services/notification.service";

import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { DashboardSidebarComponent } from "./Dashboard/dashboard-sidebar/dashboard-sidebar.component";
import { DashboardNavbarComponent } from "./Dashboard/dashboard-navbar/dashboard-navbar.component";
import { DashboardFooterComponent } from "./Dashboard/dashboard-footer/dashboard-footer.component";

import { VendorslistComponent } from "./easyFoodUser/vendorslist/vendorslist.component";
import { MenuitemsComponent } from "./easyFoodUser/menuitems/menuitems.component";
import { CartComponent } from "./easyFoodUser/cart/cart.component";
import { UserProfileComponent } from "./easyFoodUser/user-profile/user-profile.component";
import { RechargeComponent } from "./easyFoodUser/recharge/recharge.component";
import { OrderhistoryComponent } from "./easyFoodUser/orderhistory/orderhistory.component";
import { OrderstatusComponent } from "./easyFoodUser/orderstatus/orderstatus.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginFooterComponent,
    LoginNavbarComponent,
    DashboardComponent,
    VendorslistComponent,
    MenuitemsComponent,
    CartComponent,
    DashboardSidebarComponent,
    UserProfileComponent,
    RechargeComponent,
    OrderhistoryComponent,
    DashboardNavbarComponent,
    DashboardFooterComponent,
    OrderstatusComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AuthService, EasyFoodService, NotificationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

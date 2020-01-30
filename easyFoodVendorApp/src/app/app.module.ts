import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";

import { LoginComponent } from "./Login/login/login.component";
import { RegisterComponent } from "./Login/register/register.component";
import { LoginFooterComponent } from "./Login/login-footer/login-footer.component";
import { LoginNavbarComponent } from "./Login/login-navbar/login-navbar.component";

import { AuthService } from "./_services/auth.service";
import { EasyFoodService } from "./_services/easy-food.service";

import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { DashboardSidebarComponent } from "./Dashboard/dashboard-sidebar/dashboard-sidebar.component";
import { DashboardNavbarComponent } from "./Dashboard/dashboard-navbar/dashboard-navbar.component";
import { DashboardFooterComponent } from "./Dashboard/dashboard-footer/dashboard-footer.component";

import { MenuitemsComponent } from "./easyFoodVendor/menuitems/menuitems.component";
import { UserProfileComponent } from "./easyFoodVendor/user-profile/user-profile.component";
import { OrderhistoryComponent } from "./easyFoodVendor/orderhistory/orderhistory.component";
import { CurrentorderComponent } from "./easyFoodVendor/currentorder/currentorder.component";
import { NotificationService } from "./_services/notification.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginFooterComponent,
    LoginNavbarComponent,
    DashboardComponent,
    MenuitemsComponent,
    DashboardSidebarComponent,
    UserProfileComponent,
    OrderhistoryComponent,
    DashboardNavbarComponent,
    DashboardFooterComponent,
    CurrentorderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AuthService, EasyFoodService, NotificationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Login/login/login.component";
import { RegisterComponent } from "./Login/register/register.component";
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { VendorslistComponent } from "./easyFoodUser/vendorslist/vendorslist.component";
import { MenuitemsComponent } from "./easyFoodUser/menuitems/menuitems.component";
import { CartComponent } from "./easyFoodUser/cart/cart.component";
import { UserProfileComponent } from "./easyFoodUser/user-profile/user-profile.component";
import { RechargeComponent } from "./easyFoodUser/recharge/recharge.component";
import { OrderhistoryComponent } from "./easyFoodUser/orderhistory/orderhistory.component";
import { OrderstatusComponent } from "./easyFoodUser/orderstatus/orderstatus.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: "userprofile",
    canActivate: [AuthGuard],
    component: UserProfileComponent
  },
  {
    path: "findyourfood",
    canActivate: [AuthGuard],
    component: VendorslistComponent
  },
  { path: "recharge", canActivate: [AuthGuard], component: RechargeComponent },
  {
    path: "orderhistory",
    canActivate: [AuthGuard],
    component: OrderhistoryComponent
  },
  {
    path: "menuitems",
    canActivate: [AuthGuard],
    component: MenuitemsComponent
  },
  { path: "cart", canActivate: [AuthGuard], component: CartComponent },
  {
    path: "orderstatus",
    canActivate: [AuthGuard],
    component: OrderstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

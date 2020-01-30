import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Login/login/login.component";
import { RegisterComponent } from "./Login/register/register.component";
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { MenuitemsComponent } from "./easyFoodVendor/menuitems/menuitems.component";
import { UserProfileComponent } from "./easyFoodVendor/user-profile/user-profile.component";
import { OrderhistoryComponent } from "./easyFoodVendor/orderhistory/orderhistory.component";
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
    path: "orderhistory",
    canActivate: [AuthGuard],
    component: OrderhistoryComponent
  },
  { path: "menuitems", canActivate: [AuthGuard], component: MenuitemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

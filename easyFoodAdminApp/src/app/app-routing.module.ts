import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Login/login/login.component";
import { RegisterComponent } from "./Login/register/register.component";
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { UserProfileComponent } from "./easyFoodAdmin/user-profile/user-profile.component";
import { OrderhistoryComponent } from "./easyFoodAdmin/orderhistory/orderhistory.component";
import { RechargeComponent } from "./easyFoodAdmin/recharge/recharge.component";
import { GeneratereportComponent } from "./easyFoodAdmin/generatereport/generatereport.component";
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
  { path: "recharge", canActivate: [AuthGuard], component: RechargeComponent },
  {
    path: "generatereport",
    canActivate: [AuthGuard],
    component: GeneratereportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

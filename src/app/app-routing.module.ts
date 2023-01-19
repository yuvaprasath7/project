import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginvalidationComponent } from './component/Design/loginvalidation/loginvalidation.component';
import { RegistervalidationComponent } from './component/Design/registervalidation/registervalidation.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  // { path: "", pathMatch: 'full', redirectTo: "login" },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {path:'',component:LoginvalidationComponent},
  {path:"register_validatiuon",component:RegistervalidationComponent}
  // { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RidespostedComponent } from './ridesposted/ridesposted.component';
import { RidesoptedComponent } from './ridesopted/ridesopted.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'ridesopted',
    component: RidesoptedComponent
  },
  {
    path:'ridesposted',
    component: RidespostedComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
]



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RidespostedComponent } from './ridesposted/ridesposted.component';
import { RidesoptedComponent } from './ridesopted/ridesopted.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RidespostedListComponent } from './ridesposted-list/ridesposted-list.component';
import{ AboutComponent } from './about/about.component';
import{ ContactComponent } from './contact/contact.component';
import{ PaypalComponent } from './paypal/paypal.component'
import{ SearchlistComponent } from './searchlist/searchlist.component'
SearchlistComponent

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
    path:'About',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'paypal',
    component: PaypalComponent
  },
  {
    path:'searchlist',
    component: SearchlistComponent
  },
  
  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'postedlist',
    component: RidespostedListComponent
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

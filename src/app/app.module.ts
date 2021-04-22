import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RidespostedComponent } from './ridesposted/ridesposted.component';
import { RidesoptedComponent } from './ridesopted/ridesopted.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { RidespostedListComponent } from './ridesposted-list/ridesposted-list.component';
import { AboutComponent } from './about/about.component';
import { PaypalComponent } from './paypal/paypal.component';
import { SearchlistComponent } from './searchlist/searchlist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RidespostedComponent,
    RidesoptedComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    RidespostedListComponent,
    AboutComponent,
    PaypalComponent,
    SearchlistComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
   
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

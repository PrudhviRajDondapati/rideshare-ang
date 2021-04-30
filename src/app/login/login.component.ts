import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Auth } from '../auth';
import { Router } from '@angular/router';
import { Register } from '../register';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  error!: string;
  uname!: string;

  // register: Register;
  // register: Register;

  public userdet: Register = {
    _id: '',
    name: '',
    username: '',
    email: '',
    password: '',

  };

  public user: Auth = {
    login: '',
    password: ''
  }
  constructor(private Auth: AuthService, private registerserv : RegisterService, private router : Router) { }

  ngOnInit(): void {

  }

  public loginuser(user: Auth): void {
    console.log(user.login);
    console.log(user.password);
    this.uname = user.login;
    this.error="";
  this.Auth.getUserDetails(user.login, user.password)
  .subscribe( s=>{
    console.log("Response : ",s);
    console.log(this.uname);
    localStorage.setItem('username',this.uname);
    localStorage.setItem('loginstatus','True');
    const un = localStorage.getItem('username');
    console.log(un);
  
  
    // console.log(user.username);
    // console.log(localStorage.getItem('username'));
    // console.log(s[0].username);
    // localStorage.setItem('username', user.username);
    this.router.navigate([''])
  } , error=> {
    this.error="Invalid Credentials"
    console.log("Error response : ", error);
  });

  }

}

import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import {RegisterService } from '../register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  public newuser: Register = {
    _id: '',
    name!: '',
    username:'',
    email:'',
    password:''

  }
  



  constructor(private registerservice: RegisterService, private router : Router) { }

  ngOnInit(): void {
  }

  public createuser(newuser: Register): void{
    this.registerservice.createuser(newuser);
    this.router.navigate([''])
  }

}

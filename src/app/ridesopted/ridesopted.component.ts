import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ridesopted } from '../ridesopted';
import {RidesoptedService} from '../ridesopted.service'

@Component({
  selector: 'app-ridesopted',
  templateUrl: './ridesopted.component.html',
  styleUrls: ['./ridesopted.component.css']
})
export class RidesoptedComponent implements OnInit { rides!: Ridesopted[];

  constructor(private ridesoptedserv : RidesoptedService, private router: Router) { }

  ngOnInit(): void {

  this.ridesoptedserv.getridesopted().subscribe(res =>{
    this.rides=res;
    console.log(res);
  },err=>console.log(err));
  }

}

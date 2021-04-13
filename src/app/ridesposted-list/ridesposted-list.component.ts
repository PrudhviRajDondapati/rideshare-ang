import { Component, OnInit } from '@angular/core';
import { Ridesposted } from '../ridesposted';
import { RidespostedService } from '../ridesposted.service';
import { Router } from '@angular/router'; 
import { Ridesopted } from '../ridesopted';
import {RidesoptedService} from '../ridesopted.service'
import { delay } from 'q';

@Component({
  selector: 'app-ridesposted-list',
  templateUrl: './ridesposted-list.component.html',
  styleUrls: ['./ridesposted-list.component.css']
})
export class RidespostedListComponent implements OnInit { rides!: Ridesposted[]; 

  constructor( private rideservice: RidespostedService, private ridesoptedserv : RidesoptedService, private router: Router) { }

  rpost: Ridesposted = new Ridesposted;
  rideid!: string;

  ngOnInit(): void {
    this.rideservice.getridesposted().subscribe(res => {
      this.rides = res;
      console.log(res);
    },err => console.log(err));
  }

  async booking(rideid:string){
    console.log("In Booking");
    this.rideid = rideid;
    this.rideservice.getSingleridesposted(this.rideid).subscribe(response => {
      this.rpost= response;
      console.log(this.rpost);

    },err=>{
      console.log(err);
    });

    await delay(300);

    
    this.update(this.rpost);


  
  }

  update(rpost:Ridesposted){
    this.createoptride(this.rpost);
    console.log("In Update");
    this.rideservice.updateridesposted(this.rideid,rpost);
    this.router.navigate(["ridesopted"]);

  }

  createoptride(rpost:Ridesposted): void {
    console.log("In Create")
    this.ridesoptedserv.createridesposted(rpost);
  
  }

}

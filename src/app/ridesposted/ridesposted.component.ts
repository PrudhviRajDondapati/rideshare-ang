import { Component, OnInit } from '@angular/core';
import { Ridesposted } from '../ridesposted';
import { RidespostedService } from '../ridesposted.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-ridesposted',
  templateUrl: './ridesposted.component.html',
  styleUrls: ['./ridesposted.component.css'],
  providers: [RidespostedService]
})
export class RidespostedComponent implements OnInit {

  public newride: Ridesposted = {
    _id: '',
    postedby: '',
    from: '',
    to: '',
    date:'',
    cost: 0,
    vacancy: 0


  };

  constructor(private ridespostedservice: RidespostedService, private router : Router) { }

  ngOnInit(): void {
  }

  public createridesposted(newride: Ridesposted): void{
    this.ridespostedservice.createridesposted(newride);
    this.router.navigate([''])
  }
}

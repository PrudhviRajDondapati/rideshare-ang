import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Ridesopted } from '../ridesopted';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit { rides!: Ridesopted[];

  private from!: string;
  private to!: string;
  private date!: string;

  constructor(private search : SearchService, private router: Router) { }

  ngOnInit(): void {
   
    this.search.getsearchresults(localStorage.getItem('from'),localStorage.getItem('to'), localStorage.getItem('date')).subscribe(res => {
      this.rides=res;
      console.log(res);

    },err=> console.log(err));
  }


}

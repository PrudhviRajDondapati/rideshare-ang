import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Search } from './search';
import { Ridesopted } from './ridesopted';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchurl = 'http://localhost:3000/api/search' ;

  constructor(private http: HttpClient) { }
  getsearchresults(from:string | null, to:string | null, date:string |null){
    const searchlist = { from, to, date};
    console.log("In service.service.ts");
    console.log(from);
    console.log(to);
    console.log(date);
    this.savedata(searchlist);
    
    delay(1000);
    return this.http.get<Ridesopted[]>(this.searchurl);
  }

  private savedata(searchlist: any){

    console.log("kothafun");

    return this.http.post(this.searchurl, searchlist);

  }
}

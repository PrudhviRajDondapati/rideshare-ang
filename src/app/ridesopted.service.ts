import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Ridesopted } from './ridesopted';
import { Ridesposted } from './ridesposted'

@Injectable({
  providedIn: 'root'
})
export class RidesoptedService {

  private ropturl = 'http://localhost:3000/api/ropt';

  constructor(private http: HttpClient) { }

  createridesposted(newRide: Ridesposted): Promise<void | Ridesopted> {
    console.log("In create");
    return this.http.post(this.ropturl, newRide)
      .toPromise()
      .then(response => {
        response as unknown as Ridesopted;
        console.log("Created Successfully");
      })
      .catch(this.handleError);
  }

  getridesopted(){
    return this.http.get<Ridesopted[]>(this.ropturl);
  }



  private handleError(error: any) {
    console.log("error");
  }


}

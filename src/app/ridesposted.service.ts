import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Ridesposted } from './ridesposted';

@Injectable({
  providedIn: 'root'
})
export class RidespostedService {

  private rposturl = 'http://localhost:3000/api/rpost';

  constructor(private http: HttpClient) { }


  getridesposted(){
    return this.http.get<Ridesposted[]>(this.rposturl)
  }


  // getSingleMusic(musicid : string): Promise<void | Music>{
  //   return this.http.get(this.musicsUrl + '/' + musicid)
  //   .toPromise()
  //   .then(response => {response as Music
  //     console.log("responseeeee ",response);                    
  //   })
  //   .catch(this.handleError);
  // }


  getSingleridesposted(rpostid : string){
    return this.http.get<Ridesposted>(this.rposturl + '/' + rpostid);
  }



  createridesposted(newRide: Ridesposted): Promise<void | Ridesposted> {
    console.log("In create");
    return this.http.post(this.rposturl, newRide)
      .toPromise()
      .then(response => {
        response as Ridesposted;
        console.log("Created Successfully");
      })
      .catch(this.handleError);
  }

  // deleteMusic(musicid : string): Promise<void | Music>{
  //   return this.http.delete(this.musicsUrl + '/' + musicid)
  //   .toPromise()
  //   .then(response =>
  //     {response as Music} )
  //   .catch(this.handleError);
  // }

  deleteridesposted(rpostid : string){
    return this.http.delete(this.rposturl + '/' + rpostid);
  }


  updateMusic(rpostid : string, ridesposted: Ridesposted): Promise<void | Ridesposted>{
    return this.http.put(this.rposturl + '/' + rpostid,ridesposted)
    .toPromise()
    .then(response =>
      {response as Ridesposted} )
    .catch(this.handleError);
  }


  private handleError(error: any) {
    console.log("error");
  }
}

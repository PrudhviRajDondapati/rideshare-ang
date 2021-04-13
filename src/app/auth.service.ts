import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private user$ = new Subject<User>();
  private authurl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  getUserDetails(login: string, password: string){
    const logcred = { login, password};

    // return this.http.post(this.authurl, logcred).pipe(
    //   switchMap(
    //     foundUser => {
    //       console.log("INSwitchmaps");
    //       // this.setUser(foundUser);97
    //       return of(foundUser);
    //     }),
    //     catchError(e=>{
    //       return throwError('Your Login details could not be verified. Please try again.');
    //     })

    // );

    return this.http.post(this.authurl, logcred);
    console.log("inauthservice");

    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private userURl = 'http://localhost:3000/api/nuser';

  constructor(private http: HttpClient) { }

  getusers(){
    return this.http.get<Register[]>(this.userURl)
  }

  createuser(newuser: Register): Promise<void | Register> {
    console.log("In create");
    return this.http.post(this.userURl, newuser)
      .toPromise()
      .then(response => {
        response as Register;
        console.log("Created Successfully");
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log("error");
  }




}

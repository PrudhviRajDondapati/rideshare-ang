import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Search } from '../search';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[SearchService]
})
export class HomeComponent implements OnInit {
  error!: String;
  
  public search: Search ={
    from: '',
    to:'',
    date:''
  }
  constructor(private searchres: SearchService, private router: Router) { }

  ngOnInit(): void {
  }
  
  public searchresult(search: Search): void {
    console.log("in home.ts");
    localStorage.setItem('from',search.from);
    localStorage.setItem('to',search.to);
    localStorage.setItem('date',search.date);
    
    this.router.navigate(['searchlist']);
    
  //   this.uname = user.login;
  //   this.error="";
  // this.Auth.getUserDetails(user.login, user.password)
  // .subscribe( s=>{
  //   console.log("Response : ",s);
  //   console.log(this.uname);
  //   localStorage.setItem('username',this.uname);
  //   const un = localStorage.getItem('username');
  //   console.log(un);
  
  
  //   // console.log(user.username);
  //   // console.log(localStorage.getItem('username'));
  //   // console.log(s[0].username);
  //   // localStorage.setItem('username', user.username);
  //   this.router.navigate([''])
  // } , error=> {
  //   this.error="Invalid Credentials"
  //   console.log("Error response : ", error);
  // });

  }
}

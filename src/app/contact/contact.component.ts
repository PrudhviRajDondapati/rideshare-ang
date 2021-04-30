import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public Contactform(): void{
    console.log("in contact form");
    this.router.navigate([''])
  }

}

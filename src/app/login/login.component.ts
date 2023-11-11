import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  breakpoint: number ;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;

  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

  login(){
    console.log("inside");
    
    window.location.href="/admin/dashboard"

  }
}

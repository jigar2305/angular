import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = ""
  email: string = ""
  password: string = ""

  constructor(private toastr:ToastrService, private router:Router){

  }

  printData(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    this.toastr.success("signup")
    this.router.navigateByUrl("/login")
  }

}

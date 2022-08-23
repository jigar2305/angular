import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private toastr:ToastrService, private router:Router){

  }
  firstName: string = ""
  email: string = ""
  password: string = ""
  printDatalogin(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    this.toastr.success("login")
  }

}

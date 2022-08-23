import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private toastr:ToastrService, private router:Router,private sessionservice:SessionService){

  }

  email: string = ""
  password: string = ""
  login(){
    let user ={
      "email" : this.email,
      "password":this.password
    }

    console.log(this.email);
    console.log(this.password);
    this.sessionservice.loginApi(user).subscribe(res =>{
      if(res){
        this.toastr.success("login done")
        this.router.navigateByUrl("/signup")
      }
    })
    
  }

}

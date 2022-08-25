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
    this.sessionservice.loginApi(user).subscribe(res =>{
      if(res){
        let authToken = res.data.authToken 
        console.log(authToken+"1234567890");
               
        localStorage.setItem("authToken",authToken)
        this.toastr.success("login done")
        this.router.navigateByUrl("/category")
      }
    })
    
  }

}

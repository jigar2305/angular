import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../auth-token.service';
import { SessionService } from '../session.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private toastr:ToastrService, private router:Router,private sessionservice:SessionService,private autht:AuthTokenService){

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
        localStorage.setItem("authToken",authToken)
        this.autht.authToken = authToken
        this.toastr.success("login done")
        this.router.navigateByUrl("/category")
      }
    },err=>{
      this.toastr.error("login fail")
      this.router.navigateByUrl("/login")
    }
    )
    
  }

}

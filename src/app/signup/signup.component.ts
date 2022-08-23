import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = ""
  email: string = ""
  password: string = ""
  gender: string =""

  constructor(private toastr:ToastrService, private router:Router,private sessionservice:SessionService){

  }
  

  signup(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.gender)
    let user = {
      "firstName": this.firstName,
      "email":this.email,
      "password":this.password,
      "gender":this.gender
    }
    this.sessionservice.signupApi(user).subscribe(res =>{
      if(res){
        this.toastr.success("signup")
        this.router.navigateByUrl("/login")
      }
    }

    )


  }

}

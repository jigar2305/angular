import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../auth-token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private tostr:ToastrService,private authTokenService:AuthTokenService) { }

  ngOnInit(): void {
    this.authTokenService.authToken=""
    localStorage.setItem("authToken","")
    this.tostr.success("logout done")
    this.router.navigateByUrl("/login")
  }

}

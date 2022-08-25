import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private toastr:ToastrService, private router:Router,private sessionservice:SessionService){

  }

  ngOnInit(): void {
  }
  category:string=""
  addcategory(){
    let category = {
      "categoryName" : this.category
    }

    this.sessionservice.categoryApi(category).subscribe(res =>{
      if (res) {
        this.toastr.success("category added...")
        this.router.navigateByUrl("/home")
      }
    })
  }
}

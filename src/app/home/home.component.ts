import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorys:Array<any> = []
  
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.getallcategory()
  }
  getallcategory(){
    this.userService.listcategory().subscribe(res => {
      console.log("get all roles==>");
      console.log(res);
      this.categorys = res;
    })
  }
  deletecategory(categoryId:any){
    console.log(categoryId+"categoryId");
    
    this.userService.deletecategory(categoryId).subscribe(res=>{
      this.toastr.success("category deleted....")
      this.categorys = this.categorys.filter(r => r.categoryId != categoryId)
    },err =>{
      this.toastr.error("something went wrong....")
    }
    )
  }

}

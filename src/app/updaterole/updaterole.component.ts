import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.css']
})
export class UpdateroleComponent implements OnInit {
  categoryName:string=""
  categoryId=0
  constructor(private aRoute: ActivatedRoute,private userService: UserService, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.categoryId = this.aRoute.snapshot.params["categoryId"]
    this.viewcategory()
  }
  viewcategory(){
    this.userService.getcategoryByIdApi(this.categoryId).subscribe(res=>{
      // alert(resp.roleName)
      this.categoryName = res.categoryName 
    },err=>{
      this.toastr.error(err)
    })
}
  updatecategory(){
    let category={
      "categoryName": this.categoryName,
      "categoryId":this.categoryId
    }
    console.log(category);
    
    this.userService.updatecategoryApi(category).subscribe(res=>{
      this.router.navigateByUrl("/home")
      this.toastr.success("update successfully")
    },err=>{
      this.toastr.error(err)
    })
  }

}

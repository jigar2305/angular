import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  categoryApi(category:any):Observable<any>{
    return this.http.post(environment.url+"admin/category", category)
   }
   listcategory():Observable<any>{
    return this.http.get(environment.url+"admin/category")
   }
   deletecategory(categoryId:any):Observable<any>{
    return this.http.delete(environment.url+"admin/category/"+categoryId)
   }
   getcategoryByIdApi(categoryId:any):Observable<any>{
    return this.http.get(environment.url+"admin/category/"+categoryId)
   }
   updatecategoryApi(category:any):Observable<any>{
    return this.http.put(environment.url+"admin/category", category)
   }

}

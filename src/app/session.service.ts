import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private http: HttpClient) {
    
   }
   signupApi(user: any): Observable<any> {
    return this.http.post("http://localhost:8787/public/signup", user)
   }
   loginApi(user: any): Observable<any>{
    return this.http.post("http://localhost:8787/public/login", user)
   }
   categoryApi(category:any):Observable<any>{
    return this.http.post("http://localhost:8787/admin/category", category)
   }
}

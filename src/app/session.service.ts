import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private http: HttpClient) {
    
   }
   signupApi(user: any): Observable<any> {
    return this.http.post(environment.url+"public/signup", user)
   }
   loginApi(user: any): Observable<any>{
    return this.http.post(environment.url+"public/login", user)
   }
   
}

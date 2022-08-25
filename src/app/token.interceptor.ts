import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken = localStorage.getItem("authToken") as string
    

    //body 
    if (request.method.toLowerCase() == "post") { // 



      if (request.body instanceof FormData) {
        request = request.clone({
          body: request.body.append("authToken", authToken)
        })
      } else {
        console.log(typeof (request.body));
        console.log(request.body);

      }

    }

    console.log("auth Token interceptor.....")
    return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  


  }
}

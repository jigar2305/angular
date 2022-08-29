import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url == "http://localhost:8787/public/login" ||request.url == "http://localhost:8787/public/signup"){
      return next.handle(request); // go forward with header  
    }else{
      let authToken = localStorage.getItem("authToken") as string
      return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  
    }
  }
}

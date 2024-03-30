import { Injectable } from '@angular/core';
import {  HttpEvent,  HttpInterceptor,  HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthenticationCacheDatasource } from 'src/app/data/datasources/cache/authentication_cache_datasource';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private cache: IAuthenticationCacheDatasource) {} 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        this.cache.getCurrentTokenLocalStorege().subscribe((token)=>{
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token.access_token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
            }
        })

        return next.handle(request)
    }
}
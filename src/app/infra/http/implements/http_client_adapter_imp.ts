import { Observable, shareReplay } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpAdapter, Options } from "../http_adapter";
import { Injectable } from "@angular/core";
import { EndpointConfig } from "../model/end-point.model";

export function createUrl(url:string, params?: string):string {
    return `${url}${params ? params : ''}`.replace(/\s/g, '');
}

@Injectable({ providedIn: 'root' })
export class HttpClientAdapterImp implements HttpAdapter<any> {

    constructor(private http: HttpClient) {}

    public createAndStartRequest<T>(config: EndpointConfig, params?: string, options?: Options): Observable<T> {
        return this.http.request<T>(config.method, createUrl(config.api(), params), options).pipe(
            shareReplay()
        )
    }
    
}
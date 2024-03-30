import { Observable, shareReplay } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { IHttpAdapter, Options } from "../http_adapter";
import { Injectable } from "@angular/core";
import { Url } from "../model/url.model";
import { EndpointConfig } from "../model/end-point.model";

export function createUrl(url:Url, params?: string):string {
    return `${url.protocol} ${url.Subdomain ? url.Subdomain : ''} ${url.Domain} ${url.TLD ? url.TLD.join('') : ''} ${url.Port ? url.Port : ''} ${url.version ? url.version : ''} ${url.preview ? url.preview : ''} ${url.Subdirectory ? url.Subdirectory : ''} ${params ? params : ''}`.replace(/\s/g, '');
}

@Injectable({ providedIn: 'root' })
export class HttpClientAdapterImp implements IHttpAdapter<any> {

    constructor(private http: HttpClient) {}

    public createAndStartRequest<T>(config: EndpointConfig, params?: string, options?: Options): Observable<T> {
        return this.http.request<T>(config.method, createUrl(config.url, params), options).pipe(
            shareReplay()
        )
    }
    
}
import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { EndpointConfig } from "./model/end-point.model";

export type Options = {
    body?: any;
    headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?:
        | HttpParams
        |{
            [params: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
    };
    responseType?: 'json';
    reportProgress?: boolean;
    withCredentials?: boolean;
    paramsUrl?:string[]
}

export abstract class HttpAdapter<T> {
    abstract createAndStartRequest(config: EndpointConfig, params?: string, options?: Options): Observable<T>;
}
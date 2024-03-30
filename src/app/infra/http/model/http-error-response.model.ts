export interface HttpErrorResponse {
    headers: any,
    status: number,
    statusText: string,
    url: string,
    ok: boolean,
    name: string,
    message: string,
    error: any
}
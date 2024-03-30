import { HttpErrorResponse } from "src/app/infra/http/model/http-error-response.model";

export const HttpErrorRequestValidate = (status:number, message:string) => {
    const error:HttpErrorResponse = {
        headers: null,
        status: status,
        statusText: '',
        url: '',
        ok: false,
        name: '',
        message: message,
        error: null
    }

    return error
}
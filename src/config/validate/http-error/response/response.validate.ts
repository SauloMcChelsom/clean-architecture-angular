import { HttpErrorResponse } from "src/app/infra/http/model/http-error-response.model";
import { errorStatusList } from "../model/error-status-list.mode";

export const HttpErrorResponseValidate = (error:HttpErrorResponse) => {
    const errorStatus = errorStatusList.find(i => i.statusCode == error.status);
    console.log(errorStatus)

    if(errorStatus) {
        console.error('Validation error:', error);
        return error.message;
    }

    if(error.statusText == "Unknown Error") {
        console.error('Validation error:', error);
        return error.message;
    }

    console.log(error)
    return error
}
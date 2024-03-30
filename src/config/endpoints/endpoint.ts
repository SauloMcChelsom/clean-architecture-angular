import { EndpointConfig } from "src/app/infra/http/model/end-point.model";
import { preview, version } from "src/app/infra/http/model/url.model";
import { environment } from "src/assets/environments/enviroment";

export const IS_EMAIL_ALREADY_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'POST',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/is-email-already'
    }
}

export const CREATE_NEW_ACCOUNT_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'POST',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/create-new-account'
    }
}

export const REFRESH_TPOKEN_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'GET',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/refresh-token'
    }
}

export const SIGN_IN_WITH_EMAIL_AND_PASSWORD_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'POST',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/sign-in-with-email-and-password'
    }
}

export const GET_CURRENT_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'GET',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/get-current-user'
    }
}

export const FORGOT_PASSWORD_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'GET',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/forgot-password'
    }
}

export const VALID_TOKEN_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'GET',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/valid-token'
    }
}

export const REVOKE_TOKEN_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'GET',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/revoke-token'
    }
}

export const GET_CURRENT_TOKEN_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'GET',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/get-current-token'
    }
}

export const LOGOUT_ENDPOINT_CONFIG: EndpointConfig = {
    method: 'GET',
    url: {
        protocol: environment.Protocol,
        Domain: environment.Domain,
        Port: environment.Port,
        preview:preview.public,
        version:version.v1,
        Subdirectory: '/auth/logout'
    }
}
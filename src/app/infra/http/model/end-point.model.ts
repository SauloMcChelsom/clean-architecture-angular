import { Url } from "./url.model"

type Methd = 'POST' | 'GET'

export interface EndpointConfig {
    method: Methd,
    url: Url
}
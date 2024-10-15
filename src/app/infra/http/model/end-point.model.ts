import { Url } from "./url.model"

type Methd = 'POST' | 'GET'

export interface EndpointConfig {
    method: Methd,
    property: Url,
    api: () => string
}
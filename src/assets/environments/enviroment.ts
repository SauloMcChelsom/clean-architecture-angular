import { Port, Protocol, preview, version } from "src/app/infra/http/model/url.model";

export const environment = {
  production: false,
  Domain: 'localhost',
  Protocol: Protocol.HTTP,
  version: version.v1,
  preview: preview.private,
  Port: Port._3000
}

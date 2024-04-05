import { Port, Protocol, TLD, preview, version } from "src/app/infra/http/model/url.model";

export const environment = {
  production: true,
  Domain: 'api-note-beans',
  Protocol: Protocol.HTTPS,
  TLD: [TLD.COM, TLD.BR],
  version: version.v1,
  preview: preview.private,
  Port: Port.default
}

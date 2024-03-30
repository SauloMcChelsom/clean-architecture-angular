import { Port, Protocol, TLD, preview, version } from "src/app/infra/http/http_adapter";

export const environment = {
  production: true,
  Domain: 'note-beans',
  Protocol: Protocol.HTTPS,
  TLD: [TLD.COM, TLD.BR],
  version: version.v1,
  preview: preview.private,
  Port: Port.default
}

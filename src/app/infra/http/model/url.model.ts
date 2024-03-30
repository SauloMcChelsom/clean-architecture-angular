export enum Protocol { HTTPS = 'https://', HTTP = 'http://'};
export enum TLD { COM = '.com', BR ='.br', ORG ='.org' };
export enum version { v1 = '/v1' } ;
export enum preview { public = '/public', private = '/private' };
export enum Port { default = ':80', _8080 = ':8080', _4200 = ':4200', _3000 = ':3000' };

export interface Url {
    protocol: Protocol;
    Subdomain?: string;
    Domain: string;
    Port?: Port;
    TLD?: TLD[]
    version?: version;
    preview?: preview;
    Subdirectory: string;
}
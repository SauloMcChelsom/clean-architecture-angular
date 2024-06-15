import { Observable, of } from "rxjs";
import * as CryptoJS from "crypto-js";
import { CryptoAdapter } from "../../crypto_adapter";

export class CryptoAdapterImp implements CryptoAdapter {
   encrypt(value : any, secretKey : string) : Observable<string> {
    let valueToEncrypt : any = value;

    if (typeof value === 'object') {
      valueToEncrypt = JSON.stringify(value);
    }

    const ciphertext = CryptoJS.AES.encrypt(valueToEncrypt, secretKey).toString();

    return of(ciphertext);
  }

   decrypt(ciphertext : string, secretKey : string) : Observable<any> {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    let decryptedData : any;

    try {
      decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch(e) {
      decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    }

    return of(decryptedData);
  }
}
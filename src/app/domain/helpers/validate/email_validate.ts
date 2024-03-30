import { Observable, of, throwError } from "rxjs";

export class EmailValidate {

    public static isValidEmail(email: string): Observable<boolean> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const IS_NOT_VALID_EMAIL = emailRegex.test(email);

        if (!IS_NOT_VALID_EMAIL) {
           return throwError(() => 'Este e-mail não é valido');
        }
        return of(true);
    }
}
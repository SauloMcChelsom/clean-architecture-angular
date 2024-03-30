import { of, Observable, throwError } from 'rxjs';
import { MIN_CHARACTERS_PASSWORD } from '../constants';

export class PasswordValidate {

    public static validatePasswordNotHaveSevenCharacters(password: string): Observable<boolean> {
        const PASSWORD_NOT_HAVE_SEVEN_CHARACTERS = password.length < MIN_CHARACTERS_PASSWORD;

        if (PASSWORD_NOT_HAVE_SEVEN_CHARACTERS) {
           return throwError(() => 'As recomendações básicas indicam que sua senha deve conter pelo menos 8 caracteres');
        }
         return of(true);
    }

    public static validatePasswordIfExistOneLetter(password: string): Observable<boolean> {
        const letterRegex = /[a-zA-Z]/;
        const PASSWORD_NOT_HAVE_ONE_LETTER = letterRegex.test(password)

        if (!PASSWORD_NOT_HAVE_ONE_LETTER) {
           return throwError(() => 'Sua senha deve conter pelo menos uma letras');
        }
         return of(true);
    }

    public static validatePasswordIfExistUppercaseLetter(password: string): Observable<boolean> {
        const letterRegex = /[A-Z]/;
        const PASSWORD_NOT_HAVE_UPPERCASE_LETTER = letterRegex.test(password)

        if (!PASSWORD_NOT_HAVE_UPPERCASE_LETTER) {
            return throwError(() => 'Sua senha deve conter pelo menos uma letras maiúscula');
        }
        return of(true);
    }

    public static validatePasswordIfExistLowercaseLetter(password: string): Observable<boolean> {
        const letterRegex = /[a-z]/;
        const PASSWORD_NOT_HAVE_LOWERCASE_LETTER = letterRegex.test(password)

        if (!PASSWORD_NOT_HAVE_LOWERCASE_LETTER) {
            return throwError(() => 'Sua senha deve conter pelo menos uma letras minúscula');
        }
        return of(true);
    }

    public static validatePasswordIfExistOneNumber(password: string): Observable<boolean> {
        const numberRegex = /\d/;
        const PASSWORD_NOT_HAVE_ONE_NUMBER = numberRegex.test(password)

        if (!PASSWORD_NOT_HAVE_ONE_NUMBER) {
            return throwError(() => 'Sua senha deve conter pelo menos um numero');
        }
        return of(true);
    }

    public static validatePasswordIfExistOneSpecialCharacter(password: string): Observable<boolean> {
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        const PASSWORD_NOT_HAVE_ONE_SPECIAL_CARACTER = specialCharRegex.test(password);

        if (!PASSWORD_NOT_HAVE_ONE_SPECIAL_CARACTER) {
           return throwError(() => 'Sua senha deve conter pelo menos um catacter');
        }
         return of(true);
    }
}
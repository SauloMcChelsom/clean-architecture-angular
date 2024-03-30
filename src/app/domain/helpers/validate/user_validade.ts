import { Observable, of, throwError } from "rxjs";
import { MAX_LETTER_USER_NAME_FIRST, MIN_LETTER_USER_NAME_FIRST } from "../constants";

export class UserValidate {

    public static isValidUserNameFirst(userName: string): Observable<boolean> {

        if (!userName.trim()) {
            return throwError(() => 'User name cannot be empty.');
        }

        if (userName.length < MIN_LETTER_USER_NAME_FIRST || userName.length > MAX_LETTER_USER_NAME_FIRST) {
            return throwError(() => `User name must be between ${MIN_LETTER_USER_NAME_FIRST} and ${MAX_LETTER_USER_NAME_FIRST} characters.`);
        }

        const allowedCharactersRegex = /^[a-zA-Z]+$/;
        if (!allowedCharactersRegex.test(userName)) {
            return throwError(() => 'User name can only contain letters');
        }

        return of(true);
    }
}
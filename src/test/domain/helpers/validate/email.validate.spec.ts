import { EmailValidate } from "src/app/domain/helpers/validate/email_validate";

describe('EmailValidate', () => {

    it('should return true for a valid email', () => {
        const validEmail = 'test@example.com';
        const result = EmailValidate.isValidEmail(validEmail);
        result.subscribe((isValid) => {
            expect(isValid).toBeTruthy();
        });
    });

    it('should throw an error for an invalid email', () => {
        const invalidEmail = 'invalid-email';
        const result = EmailValidate.isValidEmail(invalidEmail);
        result.subscribe(
            () => fail('Expected to throw an error'),
            (error) => {
                expect(error).toEqual('Este e-mail não é valido');
            }
        );
    });

});

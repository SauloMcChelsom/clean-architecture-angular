import { PasswordValidate } from "src/app/domain/helpers/validate/password_validate";

describe('PasswordValidate', () => {
    it('should validate password length and return error', (done: DoneFn) => {
        const shortPassword = 'abc';
        PasswordValidate.validatePasswordNotHaveSevenCharacters(shortPassword)
            .subscribe({
                error: (error) => {
                    expect(error).toBe('As recomendações básicas indicam que sua senha deve conter pelo menos 8 caracteres');
                    done();
                },
            });
    });

    it('should validate password length and return true', (done: DoneFn) => {
        const validPassword = 'ValidPwd1!';
        PasswordValidate.validatePasswordNotHaveSevenCharacters(validPassword)
            .subscribe((result) => {
                expect(result).toBe(true);
                done();
            });
    });

    it('should validate password contains at least one letter and return error', (done: DoneFn) => {
        const passwordWithoutLetter = '12345678';
        PasswordValidate.validatePasswordIfExistOneLetter(passwordWithoutLetter)
            .subscribe({
                error: (error) => {
                    expect(error).toBe('Sua senha deve conter pelo menos uma letras');
                    done();
                },
            });
    });

    it('should validate password contains at least one letter and return true', (done: DoneFn) => {
        const validPassword = 'PwdWithLetter1!';
        PasswordValidate.validatePasswordIfExistOneLetter(validPassword)
            .subscribe((result) => {
                expect(result).toBe(true);
                done();
            });
    });

    it('should validate password contains at least one uppercase letter and return error', (done: DoneFn) => {
        const passwordWithoutUppercaseLetter = 'password123';
        PasswordValidate.validatePasswordIfExistUppercaseLetter(passwordWithoutUppercaseLetter)
            .subscribe({
                error: (error) => {
                    expect(error).toBe('Sua senha deve conter pelo menos uma letras maiúscula');
                    done();
                },
            });
    });

    it('should validate password contains at least one uppercase letter and return true', (done: DoneFn) => {
        const validPassword = 'PwdWithUppercase1!';
        PasswordValidate.validatePasswordIfExistUppercaseLetter(validPassword)
            .subscribe((result) => {
                expect(result).toBe(true);
                done();
            });
    });

    it('should return true for a valid password', (done: DoneFn) => {
        const validPassword = 'ValidPassword123!';
        PasswordValidate.validatePasswordIfExistOneLetter(validPassword)
            .subscribe((result) => {
                expect(result).toBe(true);
                done();
            });
    });

    it('should return error for invalid password', (done: DoneFn) => {
        const invalidPassword = '12345678';
        PasswordValidate.validatePasswordIfExistOneLetter(invalidPassword)
            .subscribe({
                error: (error) => {
                    expect(error).toBe('Sua senha deve conter pelo menos uma letras');
                    done();
                },
            });
    });

    it('should return error for lowercase password', (done: DoneFn) => {
        const invalidPassword = '12345678';
        PasswordValidate.validatePasswordIfExistLowercaseLetter(invalidPassword)
            .subscribe({
                error: (error) => {
                    expect(error).toBe('Sua senha deve conter pelo menos uma letras minúscula');
                    done();
                },
            });
    });

    it('should return error for special character password', (done: DoneFn) => {
        const invalidPassword = '12345678';
        PasswordValidate.validatePasswordIfExistOneSpecialCharacter(invalidPassword)
            .subscribe({
                error: (error) => {
                    expect(error).toBe('Sua senha deve conter pelo menos um catacter');
                    done();
                },
            });
    });
});

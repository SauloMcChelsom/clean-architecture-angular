
import { UserValidate } from 'src/app/domain/helpers/validate/user_validade';
import { MAX_LETTER_USER_NAME_FIRST, MIN_LETTER_USER_NAME_FIRST } from '../../../../app/domain/helpers/constants/index';

describe('UserValidate', () => {

    it('should return true for a valid user name', () => {
        const validUserName = 'JohnDoe';
        const result = UserValidate.isValidUserNameFirst(validUserName);                                                                                                                                                                                                                                                    
        result.subscribe((isValid) => {
            expect(isValid).toBeTruthy();
        });
    });

    it('should throw an error for an empty user name', () => {
        const emptyUserName = '';
        const result = UserValidate.isValidUserNameFirst(emptyUserName);
        result.subscribe(
            () => fail('Expected to throw an error'),
            (error) => {
                expect(error).toEqual('User name cannot be empty.');
            }
        );
    });

    it('should throw an error for a user name that is too short', () => {
        const shortUserName = 'Jo';
        const result = UserValidate.isValidUserNameFirst(shortUserName);
        result.subscribe(
            () => fail('Expected to throw an error'),
            (error) => {
                expect(error).toEqual(`User name must be between ${MIN_LETTER_USER_NAME_FIRST} and ${MAX_LETTER_USER_NAME_FIRST} characters.`);
            }
        );
    });

    it('should throw an error for a user name that is too long', () => {
        const longUserName = 'VeryLongUserNameThatExceedsTheMaxLength';
        const result = UserValidate.isValidUserNameFirst(longUserName);
        result.subscribe(
            () => fail('Expected to throw an error'),
            (error) => {
                expect(error).toEqual(`User name must be between ${MIN_LETTER_USER_NAME_FIRST} and ${MAX_LETTER_USER_NAME_FIRST} characters.`);
            }
        );
    });

    it('should throw an error for a user name containing non-letter characters', () => {
        const invalidUserName = 'John123';
        const result = UserValidate.isValidUserNameFirst(invalidUserName);
        result.subscribe(
            () => fail('Expected to throw an error'),
            (error) => {
                expect(error).toEqual('User name can only contain letters');
            }
        );
    });

});

import { TestBed } from '@angular/core/testing';
import { IAuthenticationDatasource } from 'src/app/data/datasources/http/authentication_http_datasource';
import { IAuthenticationCacheDatasource } from 'src/app/data/datasources/cache/authentication_cache_datasource';
import { AuthenticationCacheInMemoryDatasourceImp } from 'src/app/data/datasources/cache/in_memory/authentication_cache_in_memory_datasource_imp';
import { AuthenticationLocalDatasourceImp } from 'src/app/data/datasources/http/local/authentication_local_datasource_imp';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { UserGenreEnum } from 'src/app/domain/helpers/enums/user_genre_enum';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { ICreateNewAccountUseCase, ISignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { CreateNewAccountUseCaseImp } from 'src/app/domain/usecases/auth/implements/create_new_account_usecase_imp';
import { SignInWithEmailAndPasswordUseCaseImp } from 'src/app/domain/usecases/auth/implements/sign_in_with_email_and_password_usecase_imp';

describe('[SignInWithEmailAndPassword]', () => {
    let service: ISignInWithEmailAndPassworUseCase;
    let repository: ICreateNewAccountUseCase;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ICreateNewAccountUseCase,
                    useClass: CreateNewAccountUseCaseImp,
                },
                {
                    provide: ISignInWithEmailAndPassworUseCase,
                    useClass: SignInWithEmailAndPasswordUseCaseImp,
                },
                {
                    provide: IAuthenticationRepository,
                    useClass: AuthenticationRepositoryImp,
                },
                {
                    provide: IAuthenticationDatasource,
                    useClass: AuthenticationLocalDatasourceImp,
                },
                {
                    provide: IAuthenticationCacheDatasource,
                    useClass: AuthenticationCacheInMemoryDatasourceImp
                },
            ],
        });

        service = TestBed.inject(SignInWithEmailAndPasswordUseCaseImp);
        repository = TestBed.inject(ICreateNewAccountUseCase);
    });

    beforeEach(async () => {
        repository.createNewAccount({
            name: 'ana',
            email: 'ana@gmail.com.br',
            password: 'Senha@1!',
            age: '10/27/1990',
            genre: UserGenreEnum.Masculine,
            phone: '27999124578'
        });
    });

    it('should Authenticated a user with successfully', () => {
        const user: AuthenticationEntity = {
            email: 'ana@gmail.com.br',
            password: 'Senha@1!'
        };

        function tokenIsValid(value: string): boolean {
            return new Date(value) > new Date();
        };

        service.signInWithEmailAndPassword(user.email, user.password).subscribe({
            next: (Object) => {
                expect(Object).toBeDefined()
                expect(tokenIsValid(Object.expires_in)).toBe(true);
            },
            error: (error) => {
                console.error('signInWithEmailAndPassword', error);
                expect(error).toBeUndefined();
            }
        });
    });
});
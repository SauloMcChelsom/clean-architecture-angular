import { TestBed } from '@angular/core/testing';
import { catchError, forkJoin, map, throwError } from 'rxjs';
import { IAuthenticationDatasource } from 'src/app/data/datasources/http/authentication_http_datasource';
import { IAuthenticationCacheDatasource } from 'src/app/data/datasources/cache/authentication_cache_datasource';
import { AuthenticationCacheInMemoryDatasourceImp } from 'src/app/data/datasources/cache/in_memory/authentication_cache_in_memory_datasource_imp';
import { AuthenticationLocalDatasourceImp } from 'src/app/data/datasources/http/local/authentication_local_datasource_imp';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { ICreateNewAccountUseCase, IForgotPasswordUseCase, ISignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { CreateNewAccountUseCaseImp } from 'src/app/domain/usecases/auth/implements/create_new_account_usecase_imp';
import { ForgotPasswordUseCaseImp } from 'src/app/domain/usecases/auth/implements/forgot_password_usucase_imp';
import { SignInWithEmailAndPasswordUseCaseImp } from 'src/app/domain/usecases/auth/implements/sign_in_with_email_and_password_usecase_imp';

describe('[ForgotPassword]', () => {
    let service: IForgotPasswordUseCase;
    let repository: AuthenticationRepositoryImp;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: IForgotPasswordUseCase,
                    useClass: ForgotPasswordUseCaseImp,
                },
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

        service = TestBed.inject(IForgotPasswordUseCase);
        repository = TestBed.inject(AuthenticationRepositoryImp);
    });

    it('should change Password with successfully', () => {
        return forkJoin({
            'createNewAccount': repository.createNewAccount({ name: 'ana', email: 'ana@gmail.com.br', password: 'Senha@1!' }),
            'signInWithEmailAndPassword': repository.signInWithEmailAndPassword('ana@gmail.com.br', 'Senha@1!'),
            'forgotPassword': service.forgotPassword('ana@gmail.com.br'),
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => show.forgotPassword)
        ).subscribe({
            next: (Object) => {
                expect(Object).toBe(true);
            },
            error: (error) => {
                console.error('forgotPassword', error);
                expect(error).toBeUndefined();
            }
        });
    });
});
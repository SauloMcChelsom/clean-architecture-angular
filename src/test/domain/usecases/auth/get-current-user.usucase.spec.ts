import { TestBed } from '@angular/core/testing';
import { catchError, forkJoin, map, throwError } from 'rxjs';
import { IAuthenticationDatasource } from 'src/app/data/datasources/http/authentication_http_datasource';
import { IAuthenticationCacheDatasource } from 'src/app/data/datasources/cache/authentication_cache_datasource';
import { AuthenticationCacheInMemoryDatasourceImp } from 'src/app/data/datasources/cache/in_memory/authentication_cache_in_memory_datasource_imp';
import { AuthenticationLocalDatasourceImp } from 'src/app/data/datasources/http/local/authentication_local_datasource_imp';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { UserGenreEnum } from 'src/app/domain/helpers/enums/user_genre_enum';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { ICreateNewAccountUseCase, IGetCurrentUserUseCase, ISignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { CreateNewAccountUseCaseImp } from 'src/app/domain/usecases/auth/implements/create_new_account_usecase_imp';
import { GetCurrentUserUseCaseImp } from 'src/app/domain/usecases/auth/implements/get_current_user_usucase_imp';
import { SignInWithEmailAndPasswordUseCaseImp } from 'src/app/domain/usecases/auth/implements/sign_in_with_email_and_password_usecase_imp';

describe('[GetCurrentUser]', () => {
    let service: IGetCurrentUserUseCase;
    let repository: IAuthenticationRepository;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: IGetCurrentUserUseCase,
                    useClass: GetCurrentUserUseCaseImp,
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

        service = TestBed.inject(IGetCurrentUserUseCase);
        repository = TestBed.inject(IAuthenticationRepository);
    });

    it('should get current user with successfully', () => {
        return forkJoin({
            'createNewAccount': repository.createNewAccount({ name: 'ana', email: 'ana@gmail.com.br', password: 'Senha@1!', age: '10/27/1990', genre: UserGenreEnum.Masculine, phone: '27999124578' }),
            'signInWithEmailAndPassword': repository.signInWithEmailAndPassword('ana@gmail.com.br', 'Senha@1!'),
            'getCurrentUser': service.getCurrentUser(),
        }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            map((show) => show.getCurrentUser)
        ).subscribe({
            next: (Object) => {
                expect(Object.email).toBe('ana@gmail.com.br');
                expect(Object.user_name).toBe('ana');
                expect(Object.providers).toBe('local.com');
            },
            error: (error) => {
                console.error('error getCurrentUser', error);
                expect(error).toBeUndefined();
            }
        });
    });
});
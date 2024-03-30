import { TestBed } from '@angular/core/testing';
import { IAuthenticationDatasource } from 'src/app/data/datasources/http/authentication_http_datasource';
import { IAuthenticationCacheDatasource } from 'src/app/data/datasources/cache/authentication_cache_datasource';
import { AuthenticationCacheInMemoryDatasourceImp } from 'src/app/data/datasources/cache/in_memory/authentication_cache_in_memory_datasource_imp';
import { AuthenticationLocalDatasourceImp } from 'src/app/data/datasources/http/local/authentication_local_datasource_imp';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { UserGenreEnum } from 'src/app/domain/helpers/enums/user_genre_enum';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { ICreateNewAccountUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { CreateNewAccountUseCaseImp } from 'src/app/domain/usecases/auth/implements/create_new_account_usecase_imp';

describe('[CreateNewAccount]', () => {
    let service: ICreateNewAccountUseCase;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ICreateNewAccountUseCase,
                    useClass: CreateNewAccountUseCaseImp,
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

        service = TestBed.inject(ICreateNewAccountUseCase);
    });

    it('should create new account with successfully', () => {
        const user: AuthenticationEntity = {
            name: 'ana',
            email: 'ana@gmail.com.br',
            password: 'Senha@1!',
            age: '10/27/1990',
            genre: UserGenreEnum.Masculine,
            phone: '27999124578'
        };

        service.createNewAccount(user).subscribe({
            next: (Object) => {
                expect(Object).toBeDefined()
            },
            error: (error) => {
                console.error('createNewAccount', error);
                expect(error).toBeUndefined();
            }
        });
    });
});
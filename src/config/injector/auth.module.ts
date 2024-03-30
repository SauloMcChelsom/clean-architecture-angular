import { NgModule } from '@angular/core';
import { IAuthenticationHttpDatasource } from 'src/app/data/datasources/http/authentication_http_datasource';
import { IAuthenticationCacheDatasource } from 'src/app/data/datasources/cache/authentication_cache_datasource';
import { AuthenticationCacheLocalStorageDatasourceImp } from 'src/app/data/datasources/cache/local_storage/authentication_cache_local_storege_datasource_imp';
import { AuthenticationLocalDatasourceImp } from 'src/app/data/datasources/http/local/authentication_local_datasource_imp';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { ICreateNewAccountUseCase, IGetCurrentTokenUseCase, IGetCurrentUserUseCase, IIsAuthenticatedUseCase, ILogoutUseCase, IRefreshTokenUseCase, IRevokeTokenUseCase, ISignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { CreateNewAccountUseCaseImp } from 'src/app/domain/usecases/auth/implements/create_new_account_usecase_imp';
import { GetCurrentTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/get_current_token_usucase_imp';
import { GetCurrentUserUseCaseImp } from 'src/app/domain/usecases/auth/implements/get_current_user_usucase_imp';
import { IsAuthenticatedUseCaseImp } from 'src/app/domain/usecases/auth/implements/is_authenticated_usucase_imp';
import { LogoutUseCaseImp } from 'src/app/domain/usecases/auth/implements/logout_usucase_imp';
import { RefreshTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/refresh_token_usucase_imp';
import { RevokeTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/revoke_token_usucase_imp';
import { SignInWithEmailAndPasswordUseCaseImp } from 'src/app/domain/usecases/auth/implements/sign_in_with_email_and_password_usecase_imp';
import { ILocalStorageAdapter } from 'src/app/infra/cache/local_storage_adapter';
import { LocalStorageAdapterImp } from 'src/app/infra/cache/local_storage_adapter_imp';
import { IHttpAdapter } from 'src/app/infra/http/http_adapter';
import { HttpClientAdapterImp } from 'src/app/infra/http/implements/http_client_adapter_imp';

@NgModule({
    providers: [
        {
            provide: ILogoutUseCase,
            useClass: LogoutUseCaseImp,
        },
        {
            provide: IRefreshTokenUseCase,
            useClass: RefreshTokenUseCaseImp,
        },
        {
            provide: IRevokeTokenUseCase,
            useClass: RevokeTokenUseCaseImp,
        },
        {
            provide: IGetCurrentTokenUseCase,
            useClass: GetCurrentTokenUseCaseImp,
        },
        {
            provide: IIsAuthenticatedUseCase,
            useClass: IsAuthenticatedUseCaseImp,
        },
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
            provide: IAuthenticationHttpDatasource,
            useClass: AuthenticationLocalDatasourceImp,
        },
        {
            provide: IAuthenticationCacheDatasource,
            useClass: AuthenticationCacheLocalStorageDatasourceImp
        },
        {
            provide: ILocalStorageAdapter,
            useClass: LocalStorageAdapterImp
        },
        {
            provide: IHttpAdapter,
            useClass: HttpClientAdapterImp
        },
    ],
})
export class AuthModule { }
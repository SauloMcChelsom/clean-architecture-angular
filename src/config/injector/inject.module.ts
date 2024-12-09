import { NgModule } from '@angular/core';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { CreateNewAccountUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { GetCurrentTokenUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { GetCurrentUserUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { IsAuthenticatedUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { LogoutUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { RefreshTokenUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { RevokeTokenUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { SignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { CreateNewAccountUseCaseImp } from 'src/app/domain/usecases/auth/implements/create_new_account_usecase_imp';
import { GetCurrentTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/get_current_token_usucase_imp';
import { GetCurrentUserUseCaseImp } from 'src/app/domain/usecases/auth/implements/get_current_user_usucase_imp';
import { IsAuthenticatedUseCaseImp } from 'src/app/domain/usecases/auth/implements/is_authenticated_usucase_imp';
import { LogoutUseCaseImp } from 'src/app/domain/usecases/auth/implements/logout_usucase_imp';
import { RefreshTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/refresh_token_usucase_imp';
import { RevokeTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/revoke_token_usucase_imp';
import { SignInWithEmailAndPasswordUseCaseImp } from 'src/app/domain/usecases/auth/implements/sign_in_with_email_and_password_usecase_imp';
import { StorageAdapterImp } from 'src/app/infra/storage/local_storage/local_storage_adapter_imp';
import { HttpAdapter } from 'src/app/infra/http/http_adapter';
import { HttpClientAdapterImp } from 'src/app/infra/http/implements/http_client_adapter_imp';
import { CreateNewNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { DeleteNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { FindNoteByLinkUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { GetAllNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { UpdateNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { CreateNewNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/create_new_note_usecase';
import { DeleteNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/delete_note_usecase';
import { NoteMockDatasourceImp } from 'src/app/data/datasources/mock/note_mock_datasource_imp';
import { NoteRepository } from 'src/app/domain/repositories/note_repository';
import { NoteRepositoryImp } from 'src/app/data/repositories/note_repository_imp';
import { GetAllNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/get_all_note_usecase';
import { FindNoteByLinkUseCaseImp } from 'src/app/domain/usecases/note/implements/find_note_by_link_usecase';
import { UpdateNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/update_note_usecase';
import { UserCacheCustomeImp } from 'src/app/data/cache/implements/user_cache_custome_imp';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { CustomAdapterImp } from 'src/app/infra/store/implements/custom/custom_adapter_imp';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';
import { UserCacheNgRxImp } from 'src/app/data/cache/implements/user_cache_NgRx_imp';
import { NgRxAdapterImp } from 'src/app/infra/store/implements/NgRx/ngrx_adapter_imp';
import { SessionAdapterImp } from 'src/app/infra/storage/session_storage/session_storage_adapter_imp';
import { StorageAdapter } from 'src/app/infra/storage/storage_adapter';
import { AuthenticationMockDatasourceImp } from 'src/app/data/datasources/mock/authentication_mock_datasource_imp';
import { LanguageRepository } from 'src/app/domain/repositories/language_repository';
import { LanguageRepositoryImp } from 'src/app/data/repositories/language_repository_imp';
import { GetAllLanguageUseCaseImp } from 'src/app/domain/usecases/language/implements/get_all_language_usecase';
import { AddLanguageUseCase, GetAllLanguageUseCase, GetLanguagUseCase } from 'src/app/domain/usecases/language/language_usecase';
import { LanguageMockDatasourceImp } from 'src/app/data/datasources/mock/language_mock_datasource_imp';
import { GetLanguagUseCaseeImp } from 'src/app/domain/usecases/language/implements/get_languag_usecase';
import { AddLanguageUseCaseImp } from 'src/app/domain/usecases/language/implements/add_language_usecase';
import { LanguageCacheImp } from 'src/app/data/cache/implements/language_cache_imp';
import { AuthenticationDatasource, LanguageDatasource, NoteDatasource } from 'src/app/data/datasources/datasource';
import { LanguageCache, TokenCache, UserCache, UserDatabaseCache } from 'src/app/data/cache/cache';
import { TokenCacheImp } from 'src/app/data/cache/implements/token_cache_imp';
import { UserCacheDataBaseImp } from 'src/app/data/cache/implements/user_cache_database_imp';
import { UserCacheImp } from 'src/app/data/cache/implements/user_cache_imp';

@NgModule({
    providers: [
        {
            provide: AuthenticationRepository,
            useClass: AuthenticationRepositoryImp,
        },
        {
            provide: AuthenticationDatasource,
            useClass: AuthenticationMockDatasourceImp,//AuthenticationRemotoDatasourceImp
        },
        {
            provide: CreateNewAccountUseCase,
            useClass: CreateNewAccountUseCaseImp,
        },
        {
            provide: SignInWithEmailAndPassworUseCase,
            useClass: SignInWithEmailAndPasswordUseCaseImp,
        },
        {
            provide: LogoutUseCase,
            useClass: LogoutUseCaseImp,
        },
        {
            provide: RefreshTokenUseCase,
            useClass: RefreshTokenUseCaseImp,
        },
        {
            provide: RevokeTokenUseCase,
            useClass: RevokeTokenUseCaseImp,
        },
        {
            provide: GetCurrentTokenUseCase,
            useClass: GetCurrentTokenUseCaseImp,
        },
        {
            provide: IsAuthenticatedUseCase,
            useClass: IsAuthenticatedUseCaseImp,
        },
        {
            provide: GetCurrentUserUseCase,
            useClass: GetCurrentUserUseCaseImp,
        },
        
        {
            provide:LanguageRepository,
            useClass:LanguageRepositoryImp
        },
        {
            provide:LanguageDatasource,
            useClass:LanguageMockDatasourceImp
        },
        {
            provide:GetAllLanguageUseCase,
            useClass:GetAllLanguageUseCaseImp
        },
        {
            provide:GetLanguagUseCase,
            useClass:GetLanguagUseCaseeImp
        },
        {
            provide:AddLanguageUseCase,
            useClass:AddLanguageUseCaseImp
        },
        {
            provide:LanguageCache,
            useClass:LanguageCacheImp
        },

        {
            provide: "STOREGE",
            useClass: StorageAdapterImp
        },
        {
            provide: "SESSION",
            useClass: SessionAdapterImp
        },
        {
            provide: HttpAdapter,
            useClass: HttpClientAdapterImp
        },
        {
            provide: CreateNewNoteUseCase,
            useClass: CreateNewNoteUseCaseImp
        },
        {
            provide: DeleteNoteUseCase,
            useClass: DeleteNoteUseCaseImp
        },
        {
            provide: UpdateNoteUseCase,
            useClass: UpdateNoteUseCaseImp
        },
        {
            provide: FindNoteByLinkUseCase,
            useClass: FindNoteByLinkUseCaseImp
        },
        {
            provide: GetAllNoteUseCase,
            useClass: GetAllNoteUseCaseImp
        },
        {
            provide: NoteRepository,
            useClass: NoteRepositoryImp
        },
        {
            provide: NoteDatasource,
            useClass: NoteMockDatasourceImp
        },
        {
            provide: StoreAdapter,
            useClass: NgRxAdapterImp //CustomAdapterImp
        },
        {
            provide: TokenCache,
            useClass: TokenCacheImp
        },
        {
            provide: UserDatabaseCache,
            useClass: UserCacheDataBaseImp
        },
        {
            provide: UserCache,
            useClass: UserCacheImp
        }

    ]
})
export class InjectModule { }
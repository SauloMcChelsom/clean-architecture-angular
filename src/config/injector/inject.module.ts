import { NgModule } from '@angular/core';
import { CurrentSystemLanguageCache, CurrentUserCache, NoteTable, TokenCache, UserMock } from 'src/app/data/cache/cache';
import { CurrentUserCacheImp } from 'src/app/data/cache/implements/cache/current_user_cache_imp';
import { CurrentSystemLanguageCacheImp } from 'src/app/data/cache/implements/cache/language_cache_imp';
import { TokenCacheImp } from 'src/app/data/cache/implements/cache/token_cache_imp';
import { UserMockImp } from 'src/app/data/cache/implements/mock/user_mock_imp';
import { NoteTableImp } from 'src/app/data/cache/implements/table/note_table_imp';
import { AuthenticationDatasource, LanguageDatasource, NoteDatasource } from 'src/app/data/datasources/datasource';
import { AuthenticationMockDatasourceImp } from 'src/app/data/datasources/mock/authentication_mock_datasource_imp';
import { LanguageMockDatasourceImp } from 'src/app/data/datasources/mock/language_mock_datasource_imp';
import { NoteMockDatasourceImp } from 'src/app/data/datasources/mock/note_mock_datasource_imp';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { LanguageRepositoryImp } from 'src/app/data/repositories/language_repository_imp';
import { NoteRepositoryImp } from 'src/app/data/repositories/note_repository_imp';
import { AuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { LanguageRepository } from 'src/app/domain/repositories/language_repository';
import { NoteRepository } from 'src/app/domain/repositories/note_repository';
import { CreateNewAccountUseCase, GetCurrentTokenUseCase, GetCurrentUserUseCase, IsAuthenticatedUseCase, LogoutUseCase, RefreshTokenUseCase, RevokeTokenUseCase, SignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { CreateNewAccountUseCaseImp } from 'src/app/domain/usecases/auth/implements/create_new_account_usecase_imp';
import { GetCurrentTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/get_current_token_usucase_imp';
import { GetCurrentUserUseCaseImp } from 'src/app/domain/usecases/auth/implements/get_current_user_usucase_imp';
import { IsAuthenticatedUseCaseImp } from 'src/app/domain/usecases/auth/implements/is_authenticated_usucase_imp';
import { LogoutUseCaseImp } from 'src/app/domain/usecases/auth/implements/logout_usucase_imp';
import { RefreshTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/refresh_token_usucase_imp';
import { RevokeTokenUseCaseImp } from 'src/app/domain/usecases/auth/implements/revoke_token_usucase_imp';
import { SignInWithEmailAndPasswordUseCaseImp } from 'src/app/domain/usecases/auth/implements/sign_in_with_email_and_password_usecase_imp';
import { AddLanguageUseCaseImp } from 'src/app/domain/usecases/language/implements/add_language_usecase';
import { GetAllLanguageUseCaseImp } from 'src/app/domain/usecases/language/implements/get_all_language_usecase';
import { GetLanguagUseCaseeImp } from 'src/app/domain/usecases/language/implements/get_languag_usecase';
import { AddLanguageUseCase, GetAllLanguageUseCase, GetLanguagUseCase } from 'src/app/domain/usecases/language/language_usecase';
import { CreateNewNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/create_new_note_usecase';
import { DeleteNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/delete_note_usecase';
import { FindNoteByLinkUseCaseImp } from 'src/app/domain/usecases/note/implements/find_note_by_link_usecase';
import { GetAllNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/get_all_note_usecase';
import { UpdateNoteUseCaseImp } from 'src/app/domain/usecases/note/implements/update_note_usecase';
import { CreateNewNoteUseCase, DeleteNoteUseCase, FindNoteByLinkUseCase, GetAllNoteUseCase, UpdateNoteUseCase } from 'src/app/domain/usecases/note/note_usecase';
import { HttpAdapter } from 'src/app/infra/http/http_adapter';
import { HttpClientAdapterImp } from 'src/app/infra/http/implements/http_client_adapter_imp';
import { StorageAdapterImp } from 'src/app/infra/storage/local_storage/local_storage_adapter_imp';
import { SessionAdapterImp } from 'src/app/infra/storage/session_storage/session_storage_adapter_imp';
import { NgRxAdapterImp } from 'src/app/infra/store/implements/NgRx/ngrx_adapter_imp';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';

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
            provide: LanguageRepository,
            useClass: LanguageRepositoryImp
        },
        {
            provide: LanguageDatasource,
            useClass: LanguageMockDatasourceImp
        },
        {
            provide: GetAllLanguageUseCase,
            useClass: GetAllLanguageUseCaseImp
        },
        {
            provide: GetLanguagUseCase,
            useClass: GetLanguagUseCaseeImp
        },
        {
            provide: AddLanguageUseCase,
            useClass: AddLanguageUseCaseImp
        },
        {
            provide: CurrentSystemLanguageCache,
            useClass: CurrentSystemLanguageCacheImp
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
            provide: UserMock,
            useClass: UserMockImp
        },
        {
            provide: NoteTable,
            useClass: NoteTableImp
        },
        {
            provide: CurrentUserCache,
            useClass: CurrentUserCacheImp
        }

    ]
})
export class InjectModule { }
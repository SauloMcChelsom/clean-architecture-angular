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
import { UserCacheCustomeDatasourceImp } from 'src/app/data/datasources/cache/user_cache_custome_datasource_imp';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { CustomAdapterImp } from 'src/app/infra/store/implements/custom/custom_adapter_imp';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';
import { UserRepository } from 'src/app/data/models/user.model';
import { UserCacheNgRxDatasourceImp } from 'src/app/data/datasources/cache/user_cache_NgRx_datasource_imp';
import { NgRxAdapterImp } from 'src/app/infra/store/implements/NgRx/ngrx_adapter_imp';
import { SessionAdapterImp } from 'src/app/infra/storage/session_storage/session_storage_adapter_imp';
import { StorageAdapter } from 'src/app/infra/storage/storage_adapter';

@NgModule({
    providers: [
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
            provide: CreateNewAccountUseCase,
            useClass: CreateNewAccountUseCaseImp,
        },
        {
            provide: SignInWithEmailAndPassworUseCase,
            useClass: SignInWithEmailAndPasswordUseCaseImp,
        },
        {
            provide: AuthenticationRepository,
            useClass: AuthenticationRepositoryImp,
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
            provide: NoteRepository,
            useClass: NoteMockDatasourceImp
        },
        {
            provide: StoreAdapter,
            useClass: NgRxAdapterImp //CustomAdapterImp
        },
        {
            provide: UserRepository,
            useClass: UserCacheNgRxDatasourceImp //UserCacheCustomeDatasourceImp
        },

    ]
})
export class InjectModule { }
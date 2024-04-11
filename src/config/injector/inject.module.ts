import { NgModule } from '@angular/core';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/http/authentication_repository_imp';
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
import { LocalStorageAdapter } from 'src/app/infra/local_storage/local_storage_adapter';
import { LocalStorageAdapterImp } from 'src/app/infra/local_storage/local_storage_adapter_imp';
import { HttpAdapter } from 'src/app/infra/http/http_adapter';
import { HttpClientAdapterImp } from 'src/app/infra/http/implements/http_client_adapter_imp';
import { CreateNewNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { DeleteNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { FindNotesByLinkUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { GetAllNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { UpdateNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { CreateNewNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/create_new_notes_usecase';
import { DeleteNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/delete_notes_usecase';
import { NotesLocalDatasourceImp } from 'src/app/data/datasources/local/notes_local_datasource_imp';
import { NotesRepository } from 'src/app/domain/repositories/notes_repository';
import { NotesRepositoryImp } from 'src/app/data/repositories/http/notes_repository_imp';
import { GetAllNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/get_all_notes_usecase';
import { FindNotesByLinkUseCaseImp } from 'src/app/domain/usecases/notes/implements/find_notes_by_link_usecase';
import { UpdateNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/update_notes_usecase';
import { UserCacheDatasourceImp } from 'src/app/data/datasources/cache/user_cache_datasource_imp';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { CustomAdapterImp } from 'src/app/infra/store/implements/custom/custom_adapter_imp';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';
import { UserRepository } from 'src/app/data/models/user.model';
import { UserCacheNgRxDatasourceImp } from 'src/app/data/datasources/cache/user_cache_NgRx_datasource_imp';
import { NgRxAdapterImp } from 'src/app/infra/store/implements/NgRx/ngrx_adapter_imp';

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
            provide: LocalStorageAdapter,
            useClass: LocalStorageAdapterImp
        },
        {
            provide: HttpAdapter,
            useClass: HttpClientAdapterImp
        },
        {
            provide: CreateNewNotesUseCase,
            useClass: CreateNewNotesUseCaseImp
        },
        {
            provide: DeleteNotesUseCase,
            useClass: DeleteNotesUseCaseImp
        },
        {
            provide: UpdateNotesUseCase,
            useClass: UpdateNotesUseCaseImp
        },
        {
            provide: FindNotesByLinkUseCase,
            useClass: FindNotesByLinkUseCaseImp
        },
        {
            provide: GetAllNotesUseCase,
            useClass: GetAllNotesUseCaseImp
        },
        {
            provide: NotesRepository,
            useClass: NotesRepositoryImp
        },
        {
            provide: NotesRepository,
            useClass: NotesLocalDatasourceImp
        },
        {
            provide: StoreAdapter,
            useClass: NgRxAdapterImp
        },
        {
            provide: UserRepository,
            useClass: UserCacheNgRxDatasourceImp
        },

    ]
})
export class InjectModule { }
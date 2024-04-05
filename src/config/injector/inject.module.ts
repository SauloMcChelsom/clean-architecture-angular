import { NgModule } from '@angular/core';
import { AuthenticationRepositoryImp } from 'src/app/data/repositories/authentication_repository_imp';
import { IAuthenticationRepository } from 'src/app/domain/repositories/authentication_repository';
import { ICreateNewAccountUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { IGetCurrentTokenUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { IGetCurrentUserUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { IIsAuthenticatedUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { ILogoutUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { IRefreshTokenUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { IRevokeTokenUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { ISignInWithEmailAndPassworUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
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
import { ICreateNewNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { IDeleteNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { IFindNotesByLinkUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { IGetAllNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { IUpdateNotesUseCase } from 'src/app/domain/usecases/notes/notes_usecase';
import { CreateNewNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/create_new_notes_usecase';
import { DeleteNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/delete_notes_usecase';
import { NotesLocalDatasourceImp } from 'src/app/data/datasources/local/notes_local_datasource_imp';
import { INotesRepository } from 'src/app/domain/repositories/notes_repository';
import { NotesRepositoryImp } from 'src/app/data/repositories/notes_repository_imp';
import { GetAllNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/get_all_notes_usecase';
import { FindNotesByLinkUseCaseImp } from 'src/app/domain/usecases/notes/implements/find_notes_by_link_usecase';
import { UpdateNotesUseCaseImp } from 'src/app/domain/usecases/notes/implements/update_notes_usecase';

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
            provide: ILocalStorageAdapter,
            useClass: LocalStorageAdapterImp
        },
        {
            provide: IHttpAdapter,
            useClass: HttpClientAdapterImp
        },
        {
            provide: ICreateNewNotesUseCase,
            useClass: CreateNewNotesUseCaseImp
        },
        {
            provide: IDeleteNotesUseCase,
            useClass: DeleteNotesUseCaseImp
        },
        {
            provide: IUpdateNotesUseCase,
            useClass: UpdateNotesUseCaseImp
        },
        {
            provide: IFindNotesByLinkUseCase,
            useClass: FindNotesByLinkUseCaseImp
        },
        {
            provide: IGetAllNotesUseCase,
            useClass: GetAllNotesUseCaseImp
        },
        {
            provide: INotesRepository,
            useClass: NotesRepositoryImp
        },
        {
            provide: INotesRepository,
            useClass: NotesLocalDatasourceImp
        },
    ]
})
export class InjectModule { }
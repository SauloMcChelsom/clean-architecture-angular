import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, mergeMap, of, switchMap, throwError } from 'rxjs';
import { AuthenticationEntity } from 'src/app/domain/entities/authentication_entity';
import { AuthorizationEntity } from 'src/app/domain/entities/authorization_entity';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { UserRoleEnum } from 'src/app/domain/helpers/enums/user_role_enum';
import { UserTypeEnum } from 'src/app/domain/helpers/enums/user_type_enum';
import { v4 as uuidv4 } from 'uuid';
import { IAuthenticationHttpDatasource } from '../authentication_http_datasource';
import { code } from 'src/app/domain/helpers/enums/code_enum';

interface UserDataBase extends UserEntity {
    password:string,
}

@Injectable({ providedIn: 'root' })
export class AuthenticationLocalDatasourceImp implements IAuthenticationHttpDatasource {

    private tokenInCloud!: AuthorizationEntity | undefined;
    private userInCloud!: UserEntity | undefined;
    private user: UserDataBase[] = [];
    private tokenRevoked:string[]= []

    public createNewAccount(user: AuthenticationEntity): Observable<AuthorizationEntity> {
        const isExist = this.user.find(
            props => props.email === user.email
        );
        if (isExist?.email == user.email) {
            return throwError(() => 'Endereço de e-mail já em uso')
        }

        const content: UserDataBase = {
            uid: uuidv4(),
            user_name: user.name!,
            providers: 'local.com',
            email: user.email,
            password: user.password,
            roles: [UserRoleEnum.VALID_EMAIL_ACCOUNT, UserRoleEnum.CHANGE_EMAIL_ACCOUNT, UserRoleEnum.CHANGE_PASSWORD_ACCOUNT],
            type: UserTypeEnum.USER,
            is_active: false,
            timestamp: new Date().toLocaleDateString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }
        this.user.push(content);

        let currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1)
        let expires_in = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const jwt = this.generateToken({ uid: content.uid, email: content.email, is_active: content.is_active }, expires_in);

        return forkJoin({'jwt': jwt}).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            switchMap((values) => {
                const token: AuthorizationEntity = {
                    access_token: values.jwt,
                    refresh_token: uuidv4(),
                    expires_in: expires_in.toString(),
                    timestamp: new Date().toLocaleDateString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
                }

                this.tokenInCloud = token;
                return of(token);
            })
        );
    }

    public signInWithEmailAndPassword(email: string, password: string): Observable<AuthorizationEntity> {
        const isExistEmail = this.user.find(
            user => user.email === email
        );

        if (!isExistEmail) {
            return throwError(() => `O e-mail ${email} não foi cadastrado`)
        }

        const isExistUser = this.user.find(
            user => user.email === email && user.password === password
        );

        if (!isExistUser) {
            return throwError(() => 'A senha digitado não coincidem')
        }

        this.userInCloud = isExistUser;
        
        return this.generateTokenRoot();
    }

    public isEmailAlreadyExists(email: string): Observable<boolean> {
        let res: boolean = false;
        for (let user of this.user) {
            if (user.email == email) {
                res = true;
                break;
            }
        }
        return of(res);
    }

    public getCurrentUser(toke: AuthorizationEntity): Observable<UserEntity> {
        return this.validToken(toke).pipe(
            switchMap(() => of(this.userInCloud!))
        );
    }

    public forgotPassword(email: string): Observable<boolean> {
        return of(true);
    }

    public validToken(content: AuthorizationEntity): Observable<boolean> {
        if (content == undefined) {
            return throwError(() => code.TOKE_NULL)
        }
        
        const token = content;
        if (new Date(token.expires_in) < new Date()) {
            return throwError(() => code.TOKE_EXPIRES)
        }
        return of(true);
    }

    public revokeToken(content: AuthorizationEntity): Observable<boolean> {
        this.tokenRevoked.push(content?.refresh_token)
        this.tokenInCloud = undefined;
        return of(true);
    }

    public refreshToken(content: AuthorizationEntity): Observable<AuthorizationEntity> {
        if (!content) {
            return throwError(() => code.TOKEN_IS_NULL)
        }

        const token = this.tokenRevoked.find((token) => token == content.refresh_token)
        if (token) {
            return throwError(() => code.TOKEN_NOT_UNAUTHORRIZED)
        }

        return this.generateTokenRoot(content.refresh_token)
    }

    public getCurrentToken(): Observable<AuthorizationEntity> {
        return of(this.tokenInCloud!);
    }

    public logout(content: AuthorizationEntity): Observable<boolean> {
        return this.revokeToken(content).pipe(
            mergeMap((isRevokeToken) => {
                if (isRevokeToken) {
                    this.userInCloud = undefined;
                    this.tokenInCloud = undefined;
                    return of(true);
                }

                return of(false);
            })
        );
    }

    private async generateToken(payload: any, iat:any): Promise<string> {
        return await `ey.${uuidv4()}s3-JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${uuidv4()}.${uuidv4()}.${uuidv4()}_${uuidv4()}`;
    }

    private generateTokenRoot(refresh_token?: string) {
        let currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1)
        let expires_in = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const jwt = this.generateToken({ uid: 'uid', email: 'email', is_active: 'is_active' }, expires_in);

        return forkJoin({ 'jwt': jwt }).pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
            switchMap((values) => {
                const token: AuthorizationEntity = {
                    access_token: values.jwt,
                    refresh_token: refresh_token ? refresh_token : uuidv4(),
                    expires_in: expires_in.toString(),
                    timestamp: new Date().toLocaleDateString('en-US')
                }

                this.tokenInCloud = token;
                return of(token);
            })
        );
    }
}
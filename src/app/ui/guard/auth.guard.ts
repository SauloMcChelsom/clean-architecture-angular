import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { IsAuthenticatedUseCase } from 'src/app/domain/usecases/auth/auth_usecase';
import { ROUTING } from 'src/config/endpoints/router-links';
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    public linkRedirectToSignIn = `${ROUTING.AUTH_SIGN_IN}`;

    constructor(private router: Router, private IsAuth: IsAuthenticatedUseCase) { }

    canActivate(): Observable<boolean> {
        return this.IsAuth.isAuthenticated()
        .pipe(
            switchMap(() => {
                return of(true);
            })
        )
        .pipe(
            catchError(()=>{
                this.router.navigate([this.linkRedirectToSignIn]);
                return of(false);
            })
        )
    }
}

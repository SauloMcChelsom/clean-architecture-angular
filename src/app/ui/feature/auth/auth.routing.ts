import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_LINKS } from 'src/config/endpoints/router-links';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const ROUTES: Routes = [
  {
    path: ROUTER_LINKS.ROOT,
    component: SignInComponent,
    data: { title: 'NOTE.HOME' }
  },
  {
    path: ROUTER_LINKS.SIGN_IN,
    component: SignInComponent,
    data: { title: 'NOTE.HOME' }
  },
  {
    path: ROUTER_LINKS.REGISTER,
    component: RegisterComponent,
    data: { title: 'NOTE.HOME' }
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRouteModule { }

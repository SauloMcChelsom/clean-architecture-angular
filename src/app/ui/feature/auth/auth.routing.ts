import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from 'src/config/endpoints/router-links';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const ROUTES: Routes = [
  {
    path: ROUTING.ROOT,
    component: SignInComponent,
    data: { title: 'NOTE.HOME' }
  },
  {
    path: ROUTING.SIGN_IN,
    component: SignInComponent,
    data: { title: 'NOTE.HOME' }
  },
  {
    path: ROUTING.REGISTER,
    component: RegisterComponent,
    data: { title: 'NOTE.HOME' }
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRouteModule { }

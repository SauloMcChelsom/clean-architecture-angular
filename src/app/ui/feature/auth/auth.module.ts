import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouteModule } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    AuthRouteModule
  ],
  declarations: []
})
export class AuthModule { }

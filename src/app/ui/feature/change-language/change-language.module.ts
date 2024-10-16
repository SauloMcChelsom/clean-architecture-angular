import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeLanguageComponent } from './pages/change-language.component';
import { ChangeLanguageRoutes } from './change-language.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChangeLanguageRoutes
  ],
})
export class ChangeLanguageModule { }

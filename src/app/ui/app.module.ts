import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from '../ui/theme/angular-material.module';
import { InjectModule } from 'src/config/injector/inject.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    InjectModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

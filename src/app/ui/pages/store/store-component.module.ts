import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreComponentComponent } from './store-component.component';
import { StoreRouteModule } from './store-component.routing.module';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    StoreComponentComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    StoreRouteModule
  ],
  providers: []
})
export class StoreModule { }
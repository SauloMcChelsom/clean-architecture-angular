import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreComponentComponent } from './store-component.component';
import { StoreRouteModule } from './store-component.routing.module';
import { AddComponent } from './components/add/add.component';
import { UpdadeComponent } from './components/updade/updade.component';
import { DeleteComponent } from './components/delete/delete.component';
import { BaseComponent } from '../../components/exemplo/base.component';

@NgModule({
  declarations: [
    StoreComponentComponent,
    AddComponent,
    UpdadeComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    StoreRouteModule,
    BaseComponent
  ],
  providers: []
})
export class StoreModule { }
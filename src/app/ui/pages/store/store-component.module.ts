import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponentComponent } from './store-component.component';
import { StoreRouteModule } from './store-component.routing.module';
import { StoreAdapter } from 'src/app/infra/store/store_adapter';
import { CustomAdapterImp } from 'src/app/infra/store/implements/custom/custom_adapter_imp';
import { StoreRepository } from 'src/app/infra/store/store_repository';
import { AppState, UserCacheDatasourceImp } from 'src/app/data/datasources/cache/user_cache_datasource_imp';
import { UserRepository } from 'src/app/data/models/user.model';

export const INITIAL_STATE = new InjectionToken<AppState>('initialState');

@NgModule({
  declarations: [
    StoreComponentComponent
  ],
  imports: [
    CommonModule,
    StoreRouteModule
  ],
  providers: [
    {
      provide: StoreAdapter,
      useClass: CustomAdapterImp,
      deps: [INITIAL_STATE]
  },
  {
      provide: UserRepository,
      useClass: UserCacheDatasourceImp
  },
  ]
})
export class StoreModule { }
//[StoreRepository -> CustomAdapterImp -> CustomAdapterImp -> CustomAdapterImp]
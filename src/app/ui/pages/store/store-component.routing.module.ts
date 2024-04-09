import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StoreComponentComponent } from './store-component.component'

export const ROUTES: Routes = [
    {
        path: '',
        component: StoreComponentComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class StoreRouteModule { }
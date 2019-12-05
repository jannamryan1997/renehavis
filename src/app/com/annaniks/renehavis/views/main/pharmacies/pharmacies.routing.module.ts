import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PharmaciesView } from './pharmacies.view';

const pharmaciesRoutes: Routes = [
    { path: "", component: PharmaciesView }
]
@NgModule({
    imports: [RouterModule.forChild(pharmaciesRoutes)],
    exports: [RouterModule]
})


export class PharmaciesRouterModule {

}

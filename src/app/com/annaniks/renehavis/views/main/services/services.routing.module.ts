import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServicesView } from './services.view';

const servicesRoutes: Routes = [
    { path: "", component: ServicesView }
]

@NgModule({
    imports: [RouterModule.forChild(servicesRoutes)],
    exports: [RouterModule]
})

export class ServicesRoutingModule {

}
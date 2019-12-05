import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoctorsView } from './doctors.view';

const doctorsRoutes: Routes = [
    { path: "", component: DoctorsView }
]

@NgModule({
    imports: [RouterModule.forChild(doctorsRoutes)],
    exports: [RouterModule]
})

export class DoctorsRoutingModule {

}

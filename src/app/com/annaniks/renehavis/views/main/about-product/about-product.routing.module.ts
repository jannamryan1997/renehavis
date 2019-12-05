import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutProductView } from './about-product.view';

const aboutProducte: Routes = [
    { path: "", component: AboutProductView }
]

@NgModule({
    imports: [RouterModule.forChild(aboutProducte)],
    exports: [RouterModule]
})

export class AboutProductRoutigModule {

}
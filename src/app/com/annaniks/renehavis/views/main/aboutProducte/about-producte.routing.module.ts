import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutProducteView } from './about-produce.view';

const aboutProducte: Routes = [
    { path: "", component: AboutProducteView }
]

@NgModule({
    imports: [RouterModule.forChild(aboutProducte)],
    exports: [RouterModule]
})

export class AboutProducteRoutigModule {

}
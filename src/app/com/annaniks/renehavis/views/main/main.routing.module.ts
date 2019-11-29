import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from './main.view';

const mainRoutes: Routes = [

    {
        path: "", component: MainView, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", loadChildren: "src/app/com/annaniks/renehavis/views/main/home/home.module#HomeModule" },
            { path: "contacts", loadChildren: "src/app/com/annaniks/renehavis/views/main/contacts/contacts.module#ContactsModule" },
            { path: "services", loadChildren: "src/app/com/annaniks/renehavis/views/main/services/services.module#ServicesModule" },
            { path: "aboutProducte", loadChildren: "src/app/com/annaniks/renehavis/views/main/aboutProducte/about-producte.module#AboutProducteModule" }
        ]
    },

]
@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}
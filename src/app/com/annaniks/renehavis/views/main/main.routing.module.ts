import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from './main.view';

const mainRoutes: Routes = [

    {
        path: "", component: MainView, children: [
            { path: "home", redirectTo: "/", pathMatch: "full" },
            { path: "", loadChildren: "./home/home.module#HomeModule" },
            { path: "contacts", loadChildren: "./contacts/contacts.module#ContactsModule" },
            { path: "services", loadChildren: "./services/services.module#ServicesModule" },
            { path: "about-product", loadChildren: "./about-product/about-product.module#AboutProductModule" },
            { path: "instruction", loadChildren: "./instruction/instruction.module#InstructionModule" },
            { path: "pharmacies", loadChildren: "./pharmacies/pharmacies.module#PharmaciesModule" },
            { path: "doctors", loadChildren: "./doctors/doctors.module#DoctorsModule" },
            { path: "articles", loadChildren: "./articles/articles.module#ArticlesModule" },
            // { path: "articles/:id", loadChildren: "./articles/articles-item/articles-item.module#ArticlesItemModule" },
            {path:"events",loadChildren:"./events/events.module#EventsModule"}
        ]
    },

]
@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from './main.view';

const mainRoutes: Routes = [

    {
        path: "", component: MainView, children: [
            { path: "home", redirectTo: "/", pathMatch: "full" },
            { path: "", loadChildren: "src/app/com/annaniks/renehavis/views/main/home/home.module#HomeModule" },
            { path: "contacts", loadChildren: "src/app/com/annaniks/renehavis/views/main/contacts/contacts.module#ContactsModule" },
            { path: "services", loadChildren: "src/app/com/annaniks/renehavis/views/main/services/services.module#ServicesModule" },
            { path: "about-product", loadChildren: "src/app/com/annaniks/renehavis/views/main/about-product/about-product.module#AboutProductModule" },
            { path: "instruction", loadChildren: "src/app/com/annaniks/renehavis/views/main/instruction/instruction.module#InstructionModule" },
            { path: "pharmacies", loadChildren: "src/app/com/annaniks/renehavis/views/main/pharmacies/pharmacies.module#PharmaciesModule" },
            { path: "doctors", loadChildren: "src/app/com/annaniks/renehavis/views/main/doctors/doctors.module#DoctorsModule" },
            { path: "articles", loadChildren: "src/app/com/annaniks/renehavis/views/main/articles/articles.module#ArticlesModule" },
            { path: "articles/:id", loadChildren: "src/app/com/annaniks/renehavis/views/main/articles/articles-item/articles-item.module#ArticlesItemModule" },
            {path:"events",loadChildren:"src/app/com/annaniks/renehavis/views/main/events/events.module#EventsModule"}
        ]
    },

]
@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}
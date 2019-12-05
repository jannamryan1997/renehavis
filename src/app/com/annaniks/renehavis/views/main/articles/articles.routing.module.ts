import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticlesaView } from './articles.view';

const articlesRoutes: Routes = [
    {
        path: "", component: ArticlesaView
    }
]

@NgModule({
    imports: [RouterModule.forChild(articlesRoutes)],
    exports: [RouterModule]
})

export class ArticlesRouterModule {

}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticlesItemView } from './articles-item.view';

const articlesItemRoutes: Routes = [
    { path: "", component: ArticlesItemView }
]

@NgModule({
    imports: [RouterModule.forChild(articlesItemRoutes)],
    exports: [RouterModule]
})

export class ArticlesItemRoutingModule {

}
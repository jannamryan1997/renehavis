import { NgModule } from "@angular/core";
import { ArticlesaView } from './articles.view';
import { ArticlesRouterModule } from './articles.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ArticlesaView],
    imports: [ArticlesRouterModule,SharedModule]
})

export class ArticlesModule {

}
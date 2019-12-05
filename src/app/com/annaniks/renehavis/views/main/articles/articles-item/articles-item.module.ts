import { NgModule } from "@angular/core";
import { ArticlesItemView } from './articles-item.view';
import { ArticlesItemRoutingModule } from './articles-item.routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [ArticlesItemView],
    imports: [ArticlesItemRoutingModule,SharedModule],
})

export class ArticlesItemModule {

}
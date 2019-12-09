import { NgModule } from "@angular/core";
import { ArticlesItemView } from './articles-item.view';
import { ArticlesItemRoutingModule } from './articles-item.routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ArticlesService } from '../articles.service';

@NgModule({
    declarations: [ArticlesItemView],
    imports: [ArticlesItemRoutingModule,SharedModule],
    providers:[ArticlesService]
})

export class ArticlesItemModule {

}
import { NgModule } from "@angular/core";
import { ArticlesaView } from './articles.view';
import { ArticlesRouterModule } from './articles.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ArticlesService } from './articles.service';
import { SlicetextPipe } from '../../../pipe/slicetext.pipe';
import { ArticlesItemComponent } from './components/articles-item/articles-item.component';


@NgModule({
    declarations: [ArticlesaView,SlicetextPipe,ArticlesItemComponent],
    imports: [ArticlesRouterModule,SharedModule],
    providers:[ArticlesService]
})

export class ArticlesModule {

}
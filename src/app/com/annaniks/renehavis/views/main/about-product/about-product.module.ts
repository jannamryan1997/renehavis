import { NgModule } from "@angular/core";
import { AboutProductView } from './about-product.view';
import { AboutProductRoutigModule } from './about-product.routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
    declarations: [AboutProductView],
    imports: [AboutProductRoutigModule, SharedModule]
})

export class AboutProductModule {

}
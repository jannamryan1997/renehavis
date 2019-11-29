import { NgModule } from "@angular/core";
import { AboutProducteView } from './about-produce.view';
import { AboutProducteRoutigModule } from './about-producte.routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
    declarations: [AboutProducteView],
    imports: [AboutProducteRoutigModule, SharedModule]
})

export class AboutProducteModule {

}
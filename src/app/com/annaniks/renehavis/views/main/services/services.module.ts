import { NgModule } from "@angular/core";
import { ServicesView } from './services.view';
import { ServicesRoutingModule } from './services.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ServiceTabComponent } from '../../../components';


@NgModule({
    declarations: [ServicesView,ServiceTabComponent],
    imports: [ServicesRoutingModule,SharedModule]
})

export class ServicesModule {

}
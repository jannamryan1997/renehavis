import { NgModule } from "@angular/core";
import { DoctorsView } from './doctors.view';
import { SharedModule } from '../../../shared/shared.module';
import { DoctorsRoutingModule } from './doctors.routing.module';

@NgModule({
    declarations: [DoctorsView],
    imports: [SharedModule,DoctorsRoutingModule]
})

export class DoctorsModule {

}
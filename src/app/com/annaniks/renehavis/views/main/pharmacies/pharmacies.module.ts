import { NgModule } from "@angular/core";
import { PharmaciesView } from './pharmacies.view';
import { SharedModule } from '../../../shared/shared.module';
import { PharmaciesRouterModule } from './pharmacies.routing.module';

@NgModule({
    declarations: [PharmaciesView],
    imports: [SharedModule,PharmaciesRouterModule]
})

export class PharmaciesModule {

}
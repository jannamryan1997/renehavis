import { NgModule } from "@angular/core";
import { MainRoutingModule } from './main.routing.module';
import { MainView } from './main.view';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [MainView],
    imports: [MainRoutingModule,SharedModule]
})

export class MainModule {

}
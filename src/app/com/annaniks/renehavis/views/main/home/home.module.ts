import { NgModule } from "@angular/core";
import { HomeView } from './home.view';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [HomeView],
    imports: [
        HomeRoutingModule,
        SharedModule,
        CommonModule,
        SlickCarouselModule
    ],
    bootstrap: []
})

export class HomeModule { }
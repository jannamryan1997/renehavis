import { NgModule } from "@angular/core";
import { EventsView } from './events.view';
import { EventsRoutingModule } from './events.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EventItemComponent } from '../../../components';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [EventsView,EventItemComponent],
    imports: [EventsRoutingModule,SharedModule,SlickCarouselModule,CommonModule]
})

export class EventsModule {

}
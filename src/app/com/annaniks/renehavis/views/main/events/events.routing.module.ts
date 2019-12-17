import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsView } from './events.view';

const eventsRoutes: Routes = [
    { path: "", component: EventsView }
]

@NgModule({
    imports:[RouterModule.forChild(eventsRoutes)],
    exports:[RouterModule]
})


export class EventsRoutingModule {

}
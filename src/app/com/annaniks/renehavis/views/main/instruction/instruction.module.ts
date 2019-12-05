import { NgModule } from "@angular/core";
import { InstructionView } from './instruction.view';
import { InstructionRoutingModule } from './instruction.routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
    declarations: [InstructionView],
    imports: [InstructionRoutingModule,SharedModule],
})

export class InstructionModule {

}
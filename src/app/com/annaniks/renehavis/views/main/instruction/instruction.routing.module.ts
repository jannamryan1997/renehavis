import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InstructionView } from './instruction.view';

const instructionRoutes: Routes = [
    { path: "", component: InstructionView }
]

@NgModule({
    imports: [RouterModule.forChild(instructionRoutes)],
    exports: [RouterModule]
})

export class InstructionRoutingModule {

}
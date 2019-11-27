import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FooterComponent,HeaderComponent } from '../components';

@NgModule({
    declarations: [FooterComponent,HeaderComponent],
    imports: [CommonModule],
    exports: [CommonModule,FooterComponent,HeaderComponent],
    providers: []
})


export class SharedModule {

}
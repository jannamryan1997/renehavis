import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FooterComponent,HeaderComponent,BannerComponent } from '../components';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FooterComponent,HeaderComponent,BannerComponent],
    imports: [CommonModule,RouterModule],
    exports: [CommonModule,FooterComponent,HeaderComponent,BannerComponent,RouterModule],
    providers: []
})


export class SharedModule {

}
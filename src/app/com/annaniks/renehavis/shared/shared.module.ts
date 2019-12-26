import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FooterComponent,HeaderComponent,BannerComponent, NavBarComponent } from '../components';
import { RouterModule } from '@angular/router';
import { MenuService } from '../service/menu.service';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
    declarations: [FooterComponent,HeaderComponent,BannerComponent,NavBarComponent],
    imports: [CommonModule,RouterModule,ClickOutsideModule] ,
    exports: [CommonModule,FooterComponent,HeaderComponent,BannerComponent,RouterModule,NavBarComponent,ClickOutsideModule] ,
    providers: [MenuService]
})


export class SharedModule {

}
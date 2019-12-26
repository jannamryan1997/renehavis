import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../service/menu.service';
import { Router, Params } from '@angular/router';
import { MenuItem } from '../../models/models';

@Component({
    selector: "app-navbar",
    templateUrl: "navbar.component.html",
    styleUrls: ["navbar.component.scss"]

})

export class NavBarComponent implements OnInit {

    public showMenu: boolean;
    public menuItem:MenuItem[] =
 [
        {icon:"assets/images/md4.png", link: "О Продукте",  router: "/about-product" },
        {icon:"assets/images/md3.png", link: "Аптеки", router: "/pharmacies" },
        {icon:"assets/images/md1.png", link: "МЕРОПРИЯТИЯ", router: "/events" },
        {icon:"assets/images/md5.png", link: "Полезные статьи",  router: "/articles" },
        {icon:"assets/images/md2.png", link: "Инструкция", router: "/instruction" },
        {icon:"assets/images/md6.png", link: "Контакты",  router: "/contacts" },
 
    ]


    public visibleMenuItems: MenuItem[] = [];

    constructor(public menuService: MenuService,private _router: Router) { }

    ngOnInit() {
      
        
    }


}
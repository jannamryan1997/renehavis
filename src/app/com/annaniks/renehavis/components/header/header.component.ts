import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MenuItem } from '../../models/models';
import { MenuService } from '../../service/menu.service';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {

    @ViewChild('navbar') private _navbarElement: ElementRef;
    public navItem: MenuItem[] = [
        { link: "О Продукте",  router: "/about-product" },
        { link: "Аптеки", router: "/pharmacies" },
        { link: "МЕРОПРИЯТИЯ", router: "/events" },
        { link: "Полезные статьи",  router: "/articles" },
        { link: "Инструкция", router: "/instruction" },
        { link: "Контакты",  router: "/contacts" },
 
    ]

    constructor(private _menuService:MenuService) { }

    ngOnInit() {
        this._handleScrollPositionChange();
    }

    private _handleScrollPositionChange() {
        document.addEventListener('scroll', () => {
            if (window.scrollY >= 1) {
                this._navbarElement.nativeElement.classList.add('fixed');
            }
            else {
                this._navbarElement.nativeElement.classList.remove('fixed');

            }
        })
    }
    public windowScoll(item) {
        window.scrollTo(0, item);
        console.log(window.scrollY);


    }
    public openMenu() {
        this._menuService.openLeftMenu();
    }

}
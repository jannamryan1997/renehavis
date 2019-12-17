import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MenuItem } from '../../models/models';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {

    @ViewChild('navbar') private _navbarElement: ElementRef;
    public navItem: MenuItem[] = [
        { link: "О Продукте",  router: "/main/about-product" },
        { link: "Аптеки", router: "/main/pharmacies" },
        { link: "МЕРОПРИЯТИЯ", router: "/main/events" },
        { link: "Полезные статьи",  router: "/main/articles" },
        { link: "Инструкция", router: "/main/instruction" },
        // { link: "Врачам/пациентам", scroll: 340, router: "/main/doctors" },
        { link: "Контакты",  router: "/main/contacts" },
 
    ]

    constructor() { }

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

}
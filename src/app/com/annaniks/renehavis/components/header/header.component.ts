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
        { link: "О Продукте", scroll: 0, router: "/main/about-product" },
        { link: "Аптеки", scroll: 0, router: "/main/pharmacies" },
        { link: "Полезные статьи", scroll: 0, router: "/main/articles" },
        { link: "Инструкция", scroll: 10, router: "/main/instruction" },
        { link: "Врачам/пациентам", scroll: 340, router: "/main/doctors" },
        { link: "Контакты", scroll: 340, router: "/main/contacts" },
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
import { Component, OnInit } from "@angular/core";
import { MenuItem } from '../../models/models';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {


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
    }


}
import { Component, OnInit } from "@angular/core";
import { MenuItem } from '../../models/models';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {


    public navItem: MenuItem[] = [
        { link: "О Продукте", scroll: 0, router: "/main/aboutProducte" },
        { link: "Аптеки", scroll: 0, router: "#" },
        { link: "Полезные статьи", scroll: 0, router: "#" },
        { link: "Инструкция", scroll: 10, router: "#" },
        { link: "Врачам/пациентам", scroll: 340, router: "#" },
        { link: "Контакты", scroll: 340, router: "/main/contacts" },
    ]

    constructor() { }

    ngOnInit() {
    }


}
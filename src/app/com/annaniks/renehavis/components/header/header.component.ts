import { Component, OnInit } from "@angular/core";
import { MenuItem } from '../../models/models';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {

    public navItem: MenuItem[] = [
        { link: "Аптеки", scroll: 0 },
        { link: "Полезные статьи", scroll: 0 },
        { link: "Инструкция", scroll: 10 },
        { link: "О Продукте/Пациентам врачам", scroll: 340 },
    ]

    constructor() { }

    ngOnInit() { }

}
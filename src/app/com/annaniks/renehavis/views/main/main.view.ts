import { Component, OnInit } from "@angular/core";

import { Meta } from '@angular/platform-browser';
import { MenuService } from '../../service/menu.service';

@Component({
    selector: "main-view",
    templateUrl: "main.view.html",
    styleUrls: ["main.view.scss"]
})

export class MainView implements OnInit {

    public contactItem = [
        { image: "assets/images/1.jpg" },
        { image: "assets/images/2.jpg" },
        { image: "assets/images/3.jpg" },
    ]

    constructor(private meta: Meta,private _menuService:MenuService) { }

    ngOnInit() {
       
    }
    onClickedOutside(e: Event) {
        this._menuService._leftMenu=false;
}
}
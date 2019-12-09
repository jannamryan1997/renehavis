import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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

    constructor() { }

    ngOnInit() {
       
    }

}
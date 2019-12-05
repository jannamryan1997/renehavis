import { Component, OnInit } from "@angular/core";

@Component({
    selector: "doctors-view",
    templateUrl: "doctors.view.html",
    styleUrls: ["doctors.view.scss"]
})


export class DoctorsView implements OnInit {

    public tab:number=1;

    constructor() { }

    ngOnInit() { }

    public changeTab(tab){
        this.tab=tab;
    }
}
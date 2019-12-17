import { Component, OnInit, Input } from "@angular/core";


@Component({
    selector: "app-event-item",
    templateUrl: "event-item.component.html",
    styleUrls: ["event-item.component.scss"]
})

export class EventItemComponent implements OnInit {
public showDescription:boolean=false;

    @Input() title:string;
    constructor() { }

    ngOnInit() { }

    public show():void{
        this.showDescription =! this.showDescription;
    }
}
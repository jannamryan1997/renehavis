import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-contact",
    templateUrl: "contact.component.html",
    styleUrls: ["contact.component.scss"]
})

export class ContactComponent implements OnInit {

    public contactItem=[
        {image:"assets/images/1.jpg"},
        {image:"assets/images/2.jpg"},
        {image:"assets/images/3.jpg"},
    ]
    constructor() { }

    ngOnInit() { }
}
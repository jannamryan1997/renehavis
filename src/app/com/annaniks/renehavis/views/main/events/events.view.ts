import { Component, OnInit } from "@angular/core";
import { Title, Meta } from '@angular/platform-browser';



@Component({
    selector: "events-view",
    templateUrl: "events.view.html",
    styleUrls: ["events.view.scss"]
})

export class EventsView implements OnInit {
   
    public slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        prevArrow: "<img class='a-left control-c prev slick-prev'  src='/assets/images/left.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='/assets/images/right.png'>"
    }
    constructor(private _title:Title, private _meta:Meta) {
        this._title.setTitle('Мероприятия');
        this._meta.addTag({name:"description",title:""});
    } 

    ngOnInit() { }



}
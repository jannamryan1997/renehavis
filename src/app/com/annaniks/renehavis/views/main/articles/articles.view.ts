import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ArticlesItem } from '../../../models/models';
import { ArticlesService } from './articles.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: "articles-view",
    templateUrl: "articles.view.html",
    styleUrls: ["articles.view.scss"]
})

export class ArticlesaView implements OnInit {

    public originalItem = [
        { image: "assets/images/org0.jpg" },
        { image: "assets/images/org1.jpg" },
        { image: "assets/images/org2.jpg" },
        { image: "assets/images/org3.jpg" },
        { image: "assets/images/org4.jpg" },
        { image: "assets/images/org5.jpg" },
    ]

    public articlesItem=[
        {title:"text 1dsdsdsdsdsd",text:"111111111fdfsdfsdfsdfsdfsdfs"},
        {title:"text 2dsdsdsdsdsd",text:"22222222222fdfsdfsdfsdfsdfsdfs"},
        {title:"text 3dsdsdsdsdsd",text:"333333333333fdfsdfsdfsdfsdfsdfs"},

    ]
    public tab: number = 1;

    constructor(private _router: Router, private _articlesService: ArticlesService,private _title:Title,private _meta:Meta) { 
        this._title.setTitle('Полезные статьи');
        this._meta.addTag({name:"description",title:""});
    }

    ngOnInit() {

    }


    }








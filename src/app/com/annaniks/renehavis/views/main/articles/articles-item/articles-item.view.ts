import { Component, OnInit, Input } from "@angular/core";
import { ArticlesService } from '../articles.service';
import { ArticlesItem } from '../../../../models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "articles-item-view",
    templateUrl: "articles-item.view.html",
    styleUrls: ["articles-item.view.scss"]
})

export class ArticlesItemView implements OnInit {

    @Input() title:string;

    public showText: boolean = false;

    constructor(private _articlesService: ArticlesService, private _router: ActivatedRoute) { }

    ngOnInit() {
    }

    public show(): void {
        this.showText =! this.showText;
        console.log(this.showText);
        
    }
}
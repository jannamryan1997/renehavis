import { Component, OnInit, Input } from "@angular/core";
import { ArticlesService } from '../../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "articles-item-view",
    templateUrl: "articles-item.component.html",
    styleUrls: ["articles-item.component.scss"]
})

export class ArticlesItemComponent implements OnInit {

    @Input() title:string;

    public showText: boolean = false;

    constructor(private _articlesService: ArticlesService, private _router: ActivatedRoute) { }

    ngOnInit() {
    }

    public show(): void {
        this.showText =! this.showText;
        
    }
}
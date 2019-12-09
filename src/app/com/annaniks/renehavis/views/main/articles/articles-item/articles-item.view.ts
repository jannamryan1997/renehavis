import { Component, OnInit } from "@angular/core";
import { ArticlesService } from '../articles.service';
import { ArticlesItem } from '../../../../models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "articles-item-view",
    templateUrl: "articles-item.view.html",
    styleUrls: ["articles-item.view.scss"]
})

export class ArticlesItemView implements OnInit {

    public articlesItem: ArticlesItem[];
    private _routerItem: number;
    public item: ArticlesItem;
    public localImage: string;

    constructor(private _articlesService: ArticlesService, private _router: ActivatedRoute) {
        this._router.params.subscribe(params => {
            this._routerItem = params.id;

        })
    }

    ngOnInit() {
        this._getArticlesItem();
        this.localImage = this.item.image;
    }


    private _getArticlesItem(): void {
        this.articlesItem = this._articlesService.articlesItem;
        for (var i = 0; i < this.articlesItem.length; i++) {
            if (this.articlesItem[i].id == this._routerItem) {
                this.item = this.articlesItem[i];
            }


        }

    }
}
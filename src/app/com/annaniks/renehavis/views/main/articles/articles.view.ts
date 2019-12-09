import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ArticlesItem } from '../../../models/models';
import { ArticlesService } from './articles.service';

@Component({
    selector: "articles-view",
    templateUrl: "articles.view.html",
    styleUrls: ["articles.view.scss"]
})

export class ArticlesaView implements OnInit {
    public articlesItem: ArticlesItem[];
    

    constructor(private _router: Router, private _articlesService: ArticlesService) { }

    ngOnInit() {
        this._getArticlesItem();
     }

    private _getArticlesItem(): void {
        this.articlesItem = this._articlesService.articlesItem;
    }
    public openArticlesItemPage(id): void {
        this._router.navigate(['/main/articles', id])
    }

}
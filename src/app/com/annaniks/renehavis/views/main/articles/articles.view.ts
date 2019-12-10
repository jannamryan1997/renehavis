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
    public tab: number = 1;

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

    public changeTab(tab): void {
        this.tab = tab;
        console.log(this.tab);

    }

    public openFile(): string {
        if (this.tab == 1) {
            return '/assets/files/renehav.pdf'
        }
        else{
            return '/assets/files/renehav.docx'
        }
    }
}







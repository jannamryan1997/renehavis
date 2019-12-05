import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ArticlesItem } from '../../../models/models';

@Component({
    selector: "articles-view",
    templateUrl: "articles.view.html",
    styleUrls: ["articles.view.scss"]
})

export class ArticlesaView implements OnInit {

    public articesItem: ArticlesItem[] = [
        { id: 1, type: "PATIENT SAYS", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles1.jpg" },
        { id: 2, type: "Joe Cocer", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles2.jpg" },
        { id: 3, type: "PATIENT SAYS", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles1.jpg" },
        { id: 4, type: "Anna Grey", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles3.jpg" },
        { id: 5, type: "PATIENT SAYS", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles4.jpg" },
        { id: 6, type: "Mari Cassas", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles1.jpg" },
        { id: 7, type: "PATIENT SAYS", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles2.jpg" },
        { id: 8, type: "PATIENT SAYS", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna.", image: "assets/images/articles1.jpg" },
    ]
    constructor(private _router: Router) { }

    ngOnInit() { }


    public openArticlesItemPage(id): void {
        this._router.navigate(['/main/articles/articles-item', id])
    }
}
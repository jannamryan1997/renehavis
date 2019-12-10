import { Injectable } from "@angular/core";
import { ArticlesItem } from '../../../models/models';

@Injectable()

export class ArticlesService {

    public articlesItem: ArticlesItem[] = [
        { id: 1,  image: "assets/images/RUS0.bmp" },
        { id: 2,  image: "assets/images/RUS1.bmp" },
        { id: 3,  image: "assets/images/RUS2.bmp" },
        { id: 4,  image: "assets/images/RUS3.bmp" },
        { id: 5,  image: "assets/images/RUS4.bmp" },
        { id: 6,  image: "assets/images/RUS5.bmp" },
        { id: 7,  image: "assets/images/RUS6.bmp" },
      
    ]
    
    constructor() { }



}
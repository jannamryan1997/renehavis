export interface MenuItem {
    link: string,
    scroll: number;
    router: string;

}

export interface ServiceTabItem {
    image: string;
    title: string;
    type: string;
    router?:string;
}

export interface SlidesText {
    name: string;
    profession: string;
    title: string;
}

export class ArticlesItem {
    id: number;
    image: string;
}
export class AboutItem {
    color: string;
    link: string;
}

export class DescriptionItem {
    color: string;
    link: string;
    title: string;
}

export interface Slides {
    img: string;
}
export interface PharmaciesItem {
    link: string;
}

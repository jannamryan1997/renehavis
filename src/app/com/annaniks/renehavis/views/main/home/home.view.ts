import { Component, OnInit, ViewChild } from "@angular/core";
import { ServiceTabItem, SlidesText, Slides } from '../../../models/models';

@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {
    public currentSlide: number = 0;
    public serviceTabItem: ServiceTabItem[] = [
        {router: "/main/about-product" , image: "assets/images/md4.png", title: "О  продукте", type: "Предназначен для облегчения симптомов остеоартрита коленного суставаобеспечивая смазывающими и амортизирующими свойствами синовиальноепространство сустава." },
        { router: "/main/pharmacies",image: "assets/images/md3.png", title: "Аптеки", type: "Здесь вы можете найти список аптек где можно купить препарат" },
        { router: "/main/instruction" ,image: "assets/images/md2.png", title: "Инструкция", type: "Инъекция RenehaVis (РенехаВис) должна проводиться только врачом- профессионалом, прошедшим обучение технике введения препарата." },
        // { image: "assets/images/md5.png", title: "ПОЛЕЗНЫЕ СТАТЬИ", type: "ПОЛЕЗНЫЕ СТАТЬИ НА ТЕМУ:'ЭФФЕКТИВНОЕ СРЕДСТВО ЛЕЧЕНИЯ СУСТАВОВ'" },
        { router: "/main/doctors",image: "assets/images/md1.png", title: "Врачам/пациентам", type: "Остеоартроз — наиболее частое заболевание опорно-двигательного аппарата, которым страдает около 10 % жителей развитых стран мира" },
        {router: "/main/contacts", image: "assets/images/md6.png", title: "Контакты", type: "Если возникнут вопросы можете связаться с нами и найти нас в Instagram" },
    ]


    public slides:Slides[] = [
        { img: "assets/images/doc.jpg" },
        { img: "assets/images/doc4.jpg" },
        { img: "assets/images/doc5.jpg" },
        { img: "assets/images/doc1.jpg" },
        { img: "assets/images/doc3.jpg" },

    ];

    public slidesText: SlidesText[] =
        [
            { name: "Richared Thomas", profession: "Richared Thomas", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna." },
            { name: "Richared Thomas", profession: "Richared Thomas", title: "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames." },
            { name: "Richared Thomas", profession: "Richared Thomas", title: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna." },
            { name: "Richared Thomas", profession: "Richared Thomas", title: "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames." },
            { name: "Richared Thomas", profession: "Richared Thomas", title: "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames." }
        ]
    public slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        prevArrow: "<img class='a-left control-c prev slick-prev'  src='/assets/images/left.png' >",
        nextArrow: "<img class='a-right control-c next slick-next' src='/assets/images/right.png'>"
    }

    public slideConfig2 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    }

    constructor() { }

    ngOnInit() { }
    afterChange(e) {
        this.currentSlide = e.currentSlide;


    }

}
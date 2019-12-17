import { Component, OnInit, ViewChild } from "@angular/core";
import { ServiceTabItem, SlidesText, Slides } from '../../../models/models';
import { Title, Meta } from '@angular/platform-browser';
          
@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {
    public currentSlide: number = 0;
    public serviceTabItem: ServiceTabItem[] = [
        { router: "/main/about-product", image: "assets/images/md4.png", title: "О  продукте", type: "Инновационный препарат гиалуроновой кислоты премиум класса.Идеально физиологически сбалансированная гиалуроновая кислота с безупречным профилем безопасности от Швейцарской компанией MDT Int’l SA" },
        { router: "/main/pharmacies", image: "assets/images/md3.png", title: "Аптеки", type: "Здесь вы можете найти список аптек где можно купить препарат" },
        { router: "/main/instruction", image: "assets/images/md2.png", title: "Инструкция", type: "Инъекция RenehaVis (РенехаВис) должна проводиться только врачом- профессионалом, прошедшим обучение технике введения препарата." },
        { image: "assets/images/md5.png", title: "ПОЛЕЗНЫЕ СТАТЬИ", type: "ПОЛЕЗНЫЕ СТАТЬИ НА ТЕМУ:'ЭФФЕКТИВНОЕ СРЕДСТВО ЛЕЧЕНИЯ СУСТАВОВ'" },
        // { router: "/main/doctors",image: "assets/images/md1.png", title: "Врачам/пациентам", type: "Остеоартроз — наиболее частое заболевание опорно-двигательного аппарата, которым страдает около 10 % жителей развитых стран мира" },
        { router: "/main/contacts", image: "assets/images/md6.png", title: "Контакты", type: "Если возникнут вопросы можете связаться с нами и найти нас в Instagram" },
    ]


    public slides: Slides[] = [
        { img: "assets/images/home.jpg" },

    ];

    public mainSlider: Slides[] = [
        { img: "assets/images/slid1.jpg" },
        { img: "assets/images/slid2.jpg" }
    ]

    public slidesText: SlidesText[] =
        [
            { name: "МЕЖДУНАРОДНЫЙ КОНГРЕСС ДЛЯ ТРАВМАТОЛОГОВ-ОРТОПЕДОВ АРТРОМОСТ 2019.", profession: "30 Ноября Москва, отель Балчуг", title: "«Артромост» это научно-практический проект, созданный известными практикующими врачами ортопедами России с целью обмена опытом диагностики и лечения в сфере травматологии-ортопедии и спортивной медицины." },
            { name: "РЕГИОНАЛЬНЫЕ ПРАКТИЧЕСКИЕ ШКОЛЫ ТРАВМАТОЛОГОВ-ОРТОПЕДОВ Методы экстракорпоральной ударно-волновой терапии в травматологии и ортопедии", profession: "11 декабря - 12 декабря 2019 Москва (УВТ), ФГБУ «НМИЦ ТО им. Н.Н. Приорова» Минздрава России, Новоспасский пер.,9", title: "Мастер-класс включает теоретическую и практическую части занятий. Одни из вопросов, обсуждаемых в рамках мастер-класса, представлялись Страховым Максимом Алексеевичем - К.м.н., травматологом-ортопедом, доцентом кафедры травматологии-ортопедии и военно-полевой хирургии РНИМУ им. Н.И. Пирогова, главным внештатным травматологом ФМБА России: -Особенности патологий опорно-двигательного аппарата у спортсменов  -Основы комплексного подхода к лечению травм и заболеванию конечностей с учетом требований антидопингового кодекса. М.А. Страховым великолепно был проведен Мастер-класс по использованию гиалуроновой кислоты Ренехавис (RenehaVis" },

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
        // prevArrow: "<img class='a-left control-c prev slick-prev'  src='/assets/images/left.png' >",
        // nextArrow: "<img class='a-right control-c next slick-next' src='/assets/images/right.png'>"
    }

    public slideConfig2 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        loop: true,
        autoplay: true,
        autoplayTimeout: 100,
        autoplayHoverPause: true
    }

    constructor(private _title: Title, private _meta: Meta) {
        this._title.setTitle('Протез синовиальной жидкости renehavis');
        this._meta.addTag({ name: "description", content: "Инновационный препарат гиалуроновой кислоты премиум класса. от Швейцарской компанией MDT Int’l SA В упаковке RenehaVis™ (РенехаВис) находится двухкамерный предварительно заполненный стерильный одноразовый готовый к использованию стеклянный шприц." })
    }

    ngOnInit() { }
    afterChange(e) {
        this.currentSlide = e.currentSlide;


    }

}
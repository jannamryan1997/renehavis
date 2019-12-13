import { Component, OnInit } from "@angular/core";
import { AboutItem, DescriptionItem } from '../../../models/models';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: "about-product-view",
    templateUrl: "about-product-view.html",
    styleUrls: ["about-product-view.scss"]
})

export class AboutProductView implements OnInit {

    public aboutItem:AboutItem[] = [
        { color:"#00CF91",link: "12 месяцев эффективности при лечении остеоартроза колнного сустава I и II степени" },
        { color:"#0260e8",link: "Уменьшает боль и улучшает функции сустава - клинически доказано" },
        { color:"#ffd600",link: "Отличная эффективность и переносимость" },
        { color:"#fd0079",link: " Позволяет отсрочить хирургические вмешательства" },
        { color:"#940cfe",link: "Высокий профиль безопасности" }
    ]

    public descriptionItem:DescriptionItem[] = [
        { color:"#00CF91",link: "RenehaVis (РенехаВис)", title: "представляет собой две различные формы стерильного гиалуроната натрия в физиологическом растворе, содержащем фосфатный буфер, находящиеся в пердварительно наполненном стерильном двухкамерном шприце для одномоментного интраартикулярного введения в синовиальную полость сустава." },
        { color:"#0260e8",link: "RenehaVis (РенехаВис)", title: " это низкомолекулярный гиалуронат натрия 15.4mg/0.7ml (LMW) и высокомолекулярный гиалуронат натрия 7.0mg/0.7ml (HMW), обеспечивающие поддержку и смазку коленного сустава и облегчающие симптомы остеоартрита коленного сустава." },
        { color:"#ffd600",link: "RenehaVis (РенехаВис)", title: "0.7ml LMW и 0.7ml HMW, простерилизованные горячим паром и упакованные в стеклянный, готовый к использованию двухкамерный одноразовый шприц. Шприц поставляется в блистере и картонной упаковке." },
        { color:"#fd0079",link: "RenehaVis (РенехаВис)", title: "это двухкамерный предварительно заполненный стерильный одноразовый готовый к использованию стеклянный шприц, содержащий:" },
        { color:"#940cfe",link: "Камера 1 > ", title: "Гиалуронат натрия Низкомолекулярный (LMW):0.7ml стерильного 2.2% раствора гиалуроната натрия молекулярный вес 1х106 Дальтон (Da)." },
        { color:"#00CF91",link: "Камера 2 > ", title: "Гиалуронат натрия Высокомолекулярный (HMW): 0.7ml стерильного 1.0% раствора гиалуроната натрия молекулярный вес 2 х106 Дальтон (Da)." }
    ]
    constructor(private _title:Title,private _meta: Meta) { 
     this._title.setTitle("Купить Ренехавис в Москве");
     this._meta.addTag({ name: 'description', content: 'РенехаВис протез синов. жидк. 2,2% 0,7мл + 1% 0,7мл №1, можно купить по самым низким в сети аптек Столички' });
    }

    ngOnInit() { }
}
import { Component, OnInit } from "@angular/core";
import { PharmaciesItem } from '../../../models/models';
import { Title, Meta } from '@angular/platform-browser';

declare var google;

@Component({
    selector: "pharmacies-view",
    templateUrl: "pharmacies.view.html",
    styleUrls: ["pharmacies.view.scss"]
})



export class PharmaciesView implements OnInit {

    public map;
    public pharmaciesRightItem: PharmaciesItem[] = [
        { link: "Каширское шоссе, дом 48, корпус 1 Телефон: 8(495)654−22−78" },
        { link: "ул. Белореченская, дом 37, корпус 1 Аптека 24 Телефон: 8(495)654−22−78" },
        { link: "ул. Юных Ленинцев, дом 3 Аптека 24 Телефон: 8(499)179−22−63" },
        { link: "ул. Введенского, д. 29 Аптека А5 Телефон: 8(495)335−06−55" },
        { link: "Варшавское шоссе, дом 32 Аптека «ФарГранд» с 8.00 до 20.00 ежедневно Телефон: 8(499)611−04−84" },
        { link: "Университетский проспект, дом 4 Аптека «ФарГранд» с 9.00 до 21.00 ежедневно Телефон: 8(499)530−78−74" },
        { link: "Университетский проспект, дом 9 Аптека «ФарГранд» с 9.00 до 21.00 ежедневно Телефон: 8(495)196−62−15" },
        { link: "Ленинский проспект, дом 39/1 Аптека «ФарГранд» с 9.00 до 21.00 ежедневно Телефон: 8 (495)196−62−75" },
        { link: "ул. Рождественская, дом 34 с 9.00 до 22.00 ежедневно ОПТИКА|ОРТОПЕДИЯ Телефон: 8 (985)380−60−56 АПТЕКА Телефон: 8(915)451−80−80" },
        { link: "проспект Маршала Жукова, дом 74 корпус 2 Сеть аптек «А+А» Аптека № 1 Телефон: 8 (495)947−90−98" },
        { link: "Солдатская ул., д. 2, стр. 1 Сеть аптек «А+А» Аптека № 4 Телефон: +7(929)672−07−85" },


    ]
    public pharmaciesLeftItem: PharmaciesItem[] = [
        { link: "Космодамианская наб., д. 46/50 Сеть аптек «А+А» Аптечный пункт № 6 Телефон: +7(929)545−46−42" },
        { link: "Малая Юшуньская ул., д. 3 Сеть аптек «А+А» Аптека № 7 Телефон: +7(929)571−66−93" },
        { link: "г. Москва, Бакунинская ул., д. 69 Сеть аптек «А+А» Аптечный пункт № 8 Телефон: +7(929)522−12−63" },
        { link: "г. Химки мкр. Подрезково ул. Центральная дом 6 корпус 1 Аптека «Актив» Круглосуточный телефон: +7(926)892−68−58" },
        { link: "г. Щербинка, ул. Пушкинская, дом 4 Сеть аптек «А+А» Аптека № 11 Телефон: +7(929)948−28−46" },
        { link: "	Калужская область, г. Обнинск пр. Ленина, дом 209 Телефон: 8(484)397−99−38" },
        { link: "1-я Миусская ул. дом 24/22 строение 4 Аптека «Актив» Круглосуточные телефоны: 8(499)150−73−16; +7(977)656−50−27" },
        { link: "Ореховый бульвар, дом 28 Внутрибольничная аптека «ПЕРВЫЙ АПТЕКАРЬ» Телефон: +7(925)211 11 39" }
    ]

    public locations = [
        ['Bondi Beach', 55.647468, 37.6637904],
        ['Coogee Beach', 55.6475145, 37.6309598],
        ['Cronulla Beach', 55.7019663, 37.7461499],
        ['Manly Beach', 55.6799584, 37.4293293],
        ['Maroubra Beach', 55.6801121, 37.4293293],
        ['', 55.6971045, 37.551317],
        ['', 55.6966264, , 37.5456691],
        ['', 55.7062899, 37.5803643],
        ['', 55.7004885, 37.9231874],
        ['', 55.7802133, 37.4500689],
        ['', 55.765824, 37.6975623],
        ['', 55.7367187, 37.6428944],
        ['', 55.654992, 37.5889043],
        ['', 55.7789002, 37.6882483],
        ['', 55.9490117, 37.3292862],
        ['', 55.5076613, 37.5610383],
        ['', 55.1208813, 36.5693209],
        ['', 55.7809321, 37.5912553],
        ['', 55.616462, 37.7615265]
    ];

    constructor(private _title: Title, private _meta: Meta) {
        this._title.setTitle('Аптеки');
        this._meta.addTag({ name: "description", content: "" });
    }

    ngOnInit() {
        this._initMap();
    }

    private _initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(55.751244, 37.618423),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < this.locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
                map: this.map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(this.locations[i][0]);
                    infowindow.open(this.map, marker);
                }
            })(marker, i));
        }
    }

}
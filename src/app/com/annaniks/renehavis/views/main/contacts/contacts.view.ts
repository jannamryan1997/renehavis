import { Component, OnInit } from "@angular/core";
import { Title, Meta } from '@angular/platform-browser';

declare var google;

@Component({
    selector: "contacts-view",
    templateUrl: "contacts.view.html",
    styleUrls: ["contacts.view.scss"]
})

export class ContactsView implements OnInit {

    public map;
    private _marker;
    public directionsDisplay = new google.maps.DirectionsRenderer();
    public locations = [
        ['Bondi Beach', 55.6344682, 37.4356179],
      ];

    constructor(private _title:Title,private _meta:Meta) { 
        this._title.setTitle('Контакты ООО"Фармакол" Офис продаж +7 (495) 532 67 68 info@РЕНЕХАВИС.РФ');
        this._meta.addTag({name:"description",content:"КОНТАКТНАЯ ИНФОРМАЦИЯ ООО 'Фармакол', 108811, ГОРОД МОСКВА, КИЛОМЕТР КИЕВСКОЕ ШОССЕ 22-Й (П МОСКОВСКИЙ), ДОМОВЛАД. 4 СТР 5 КОРП Е, БЛОК 502Е ЭТ 5 ОФ 18"})
    }

    ngOnInit() {
        this._initMap();
    }


    private _initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(55.6344682, 37.4356179),
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
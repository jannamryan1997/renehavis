import { Component, OnInit } from "@angular/core";

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

    constructor() { }

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
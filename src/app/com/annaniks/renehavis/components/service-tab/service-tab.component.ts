import { Component, OnInit } from "@angular/core";
import { ServiceTabItem } from '../../models/models';

@Component({
    selector: "app-service-tab",
    templateUrl: "service-tab.component.html",
    styleUrls: ["service-tab.component.scss"]
})

export class ServiceTabComponent implements OnInit {

    public serviceTabItem: ServiceTabItem[] = [
        { image: "assets/images/md1.png", title: "Health & Medical Care", type: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna." },
        { image: "assets/images/md2.png", title: "Psychological Consulting", type: "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames." },
        { image: "assets/images/md3.png", title: "Medical Treatment", type: "Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante." },
        { image: "assets/images/md4.png", title: "Cardio Monitoring", type: "Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Aenean fermentum risus id tortor." },
        { image: "assets/images/md5.png", title: "Health & Medical Care", type: "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna." },
        { image: "assets/images/md6.png", title: "Psychological Consulting", type: "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames." },
    ]
    constructor() { }

    ngOnInit() { }
}
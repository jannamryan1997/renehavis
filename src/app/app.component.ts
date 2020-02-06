import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PlatformService } from './com/annaniks/renehavis/service/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'renehavis';

  constructor(private _router: Router, private _platformService: PlatformService) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this._platformService.isPlatformBrowser)
          window.scrollTo(0, 0);
      }
    });
  }
}

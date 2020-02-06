
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PlatformService {
    private _isPlatformBrowser: boolean;
    private _isPlatformServer: boolean;

    constructor(@Inject(PLATFORM_ID) private _platformId: number) {
        this._isPlatformBrowser = isPlatformBrowser(_platformId);
        this._isPlatformServer = isPlatformServer(_platformId);
    }

    public get isPlatformBrowser(): boolean {
        return this._isPlatformBrowser;
    }

    public get isPlatformServer(): boolean {
        return this._isPlatformServer;
    }
}
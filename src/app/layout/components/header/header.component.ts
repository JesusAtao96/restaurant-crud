import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppGlobals } from './../../../global';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    userName = localStorage.getItem('name');

    constructor(private translate: TranslateService, private _global: AppGlobals, private authService: AuthenticationService) {
        this.translate.addLangs(['en', 'es']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }

    ngOnInit() {
        
    }

    toggleMenu () {
        this._global.isMenuToggle = !this._global.isMenuToggle;
    }

    onLoggedout() {
        this.authService.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}

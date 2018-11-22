import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppGlobals } from './../global';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(public router: Router, private _global: AppGlobals) {
        this.router.events.subscribe(val => {
            if (window.innerWidth <= 992) {
                this._global.isMenuToggle = false;
            }
        });
    }

    ngOnInit() {}

}

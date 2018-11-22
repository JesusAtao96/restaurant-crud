import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    isMenuToggle: boolean = true;
    pageTitle: string = '';
    /*readonly baseAppUrl: string = 'http://localhost:57431/';
    readonly baseAPIUrl: string = 'https://api.github.com/';*/

    readonly baseAppUrl: string = 'https://protected-tundra-20293.herokuapp.com';
}
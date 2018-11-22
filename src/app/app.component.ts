import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AppGlobals } from './global';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthenticationService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _global: AppGlobals, private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthenticationService) {}

  ngOnInit() {
    this.router.events
        .filter((event) => event instanceof NavigationEnd)
        .map(() => {
            return this.activatedRoute
        })
        .map((route) => {
            while (route.firstChild) route = route.firstChild;
            return route;
        })
        .filter((route) => route.outlet === 'primary')
        .mergeMap((route) => route.data)
        .subscribe((event) => {
          this._global.pageTitle = event['title'];
          //console.log('title', this._global.pageTitle);
        })

    
        this.authService.authenticationState.subscribe(state => {
          console.log('state', state);
          if (state !== null) {
            if(state) {
              this.router.navigate(['/restaurants']);
            } else {
              this.router.navigate(['/login']);
            }
          }
        });
  }

}

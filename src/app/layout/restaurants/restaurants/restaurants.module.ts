import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';

@NgModule({
    imports: [
        CommonModule,
        RestaurantsRoutingModule,
        MDBBootstrapModule
    ],
    declarations: [
        RestaurantsComponent
    ]
})
export class RestaurantsModule {}

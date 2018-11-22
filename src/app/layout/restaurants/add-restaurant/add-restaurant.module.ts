import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AddRestaurantRoutingModule } from './add-restaurant-routing.module';
import { AddRestaurantComponent } from './add-restaurant.component';

@NgModule({
    imports: [
        CommonModule,
        AddRestaurantRoutingModule,
        MDBBootstrapModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AddRestaurantComponent
    ]
})
export class AddRestaurantModule {}

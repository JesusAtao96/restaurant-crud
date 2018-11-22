import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { EditRestaurantRoutingModule } from './edit-restaurant-routing.module';
import { EditRestaurantComponent } from './edit-restaurant.component';

@NgModule({
    imports: [
        CommonModule,
        EditRestaurantRoutingModule,
        MDBBootstrapModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        EditRestaurantComponent
    ]
})
export class EditRestaurantModule {}

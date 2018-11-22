import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

import { RestaurantService, RestaurantI } from '../../../shared';
import { Router } from '@angular/router';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss'],
    animations: [routerTransition()]
})
export class RestaurantsComponent implements OnInit {

    restaurants: RestaurantI[] = [];
    headElements = ['ID', 'Nombre', 'Descripción', 'Dirección', 'Capacidad', 'Acciones'];

    constructor(private restaurantS: RestaurantService, private router: Router) {
    }

    ngOnInit() {
        this.getRestaurants();
    }

    getRestaurants() {
        this.restaurantS.getRestaurants().subscribe(
            (response) => {
                this.restaurants = response.restaurants;
                console.log('this.restaurants', this.restaurants)
            },
            (err) => {
                console.log(err)
            }
        );
    }

    addRestaurant() {
        this.router.navigate(['/add-restaurant']);
    }

    editRestaurant(id) {
        this.router.navigate(['/edit-restaurant', id]);
    }

    deleteRestaurant(id) {
        var r = confirm("¿Estás seguro de eliminar este restaurante?");
        if (r == true) {
            this.restaurantS.deleteRestaurant(id).subscribe(
                (response) => {
                    this.getRestaurants();
                },
                (error) => {
                  console.log(error);
                }
            );
        }
    }
}

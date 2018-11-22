import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'restaurants' },
            { path: 'restaurants', loadChildren: './restaurants/restaurants/restaurants.module#RestaurantsModule', data: { title: 'Lista de restaurantes' } },
            { path: 'add-restaurant', loadChildren: './restaurants/add-restaurant/add-restaurant.module#AddRestaurantModule', data: { title: 'Añadir restaurante' } },
            { path: 'edit-restaurant/:id', loadChildren: './restaurants/edit-restaurant/edit-restaurant.module#EditRestaurantModule', data: { title: 'Editar restaurante' } },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

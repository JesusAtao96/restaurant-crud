import { Component, OnInit } from '@angular/core';

import { RestaurantService } from './../../../shared';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss']
})
export class EditRestaurantComponent implements OnInit {

  paramsId: String;
  public restaurantForm: FormGroup;

  constructor(private restaurantS: RestaurantService, public fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      capacity: [0, Validators.required],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.paramsId = params['id'];
      this.getRestaurantDetail(this.paramsId);
    });
  }

  getRestaurantDetail(id) {
    this.restaurantS.getRestaurantXId(id).subscribe(
      (response) => {
        console.log('getRestaurantXId', id, response);
        let { name, description, address, capacity } = response.restaurant;
        this.restaurantForm.setValue({ name, description, address, capacity });
      },
      (err) => {
        console.log('Error: ', err);
      }
    );
  }

  editRestaurant() {
    this.restaurantS.updateRestaurant(this.paramsId, this.restaurantForm.value).subscribe(
      (response) => {
        window.history.back();
      },
      (err) => {
        console.log('Error: ', err);
      }
    );
  }

  cancelar() {
    window.history.back();
  }

}

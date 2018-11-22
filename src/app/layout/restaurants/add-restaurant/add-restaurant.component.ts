import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../../../shared';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  public restaurantForm: FormGroup;

  constructor(private restaurantS: RestaurantService, public fb: FormBuilder) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      capacity: [0, Validators.required],
    });
  }

  ngOnInit() {
  }

  registerRestaurant() {
    console.log(this.restaurantForm.value);
    this.restaurantS.createRestaurant(this.restaurantForm.value).subscribe(
      (response) => {
        window.history.back();
      },
      (err) => {
        console.log(err)
      }
    );
  }

  cancelar() {
    window.history.back();
  }

}

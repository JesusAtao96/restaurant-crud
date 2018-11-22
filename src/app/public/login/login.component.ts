import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../..//router.animations';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  
    public loginForm: FormGroup;
    isLoading: boolean = false;

    constructor(public router: Router, private authService: AuthenticationService, public fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]]
        });
    }

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    login() {
        this.isLoading = true;
        this.authService.login(this.loginForm.value).subscribe(
          (response) => {
            this.isLoading = false;
            console.log('response', response);
            this.authService.setToken(response);
          },
          (error) => {
            this.isLoading = false;
            console.log('Error', error);
            let { error: { err: { message } } } = error;
            alert(message);
          }
        );
    }
}

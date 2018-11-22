import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService) {}

    canActivate() {
        console.log(this.authService.isAuthenticated());
        return this.authService.isAuthenticated();
    }
}

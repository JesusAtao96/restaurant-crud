import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './public/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './public/signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './public/server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './public/access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './public/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

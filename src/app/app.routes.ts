import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {path:'dashboard', component:DashboardComponent},
    {path:"registration", component:RegistrationComponent}
];

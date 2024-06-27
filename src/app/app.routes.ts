import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    {path:'', component:ReactiveForm1Component},
    {path:'dashboard', component:DashboardComponent},
    {path:"registration", component:RegistrationComponent},
    {path:"reactiveform", component:ReactiveForm1Component},
    {path:"templatedrivenform", component:TemplateDrivenFormComponent},
    {path:"reactiveform2", component:ReactiveForm2Component},
    {path:"**", component:RegistrationComponent},
    
];

// States of Error
// touched, untouched, pristine, dirty

//TYPES OF FORMS
//Templat driven Form
//Reactive Form
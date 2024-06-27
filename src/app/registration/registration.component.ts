import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
//import { ServeService } from '../serve.service';
//import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';

interface Forminterface{
  Firstname: string; Lastname: string; Email: string; Phone: string
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  public status=0
  public firstName=""; public lastName=""; public email=""; public password="";
  public product_name = ""
  public form_obj = {firstName:'', lastName:"", email:"", password:""};
  public formArray:any = [];

  public formArray2:Forminterface[]=[]
  constructor(public router: Router,  ) {} //routing
  
  ngOnInit(){this.status=0

  }
  // public emailRegex:any =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  register (){
    //this.product_obj = {Name: this.product_name}
     this.form_obj = {firstName: "First Name: " + this.firstName,  lastName:"Last Name: " + this.lastName, email: "Email: " + this.email, password: "Password: " + this.password};
     this.formArray.push(this.form_obj);
     this.status=1;
     alert("registration successful" ) 
     console.log(this.form_obj);
     console.log(this.formArray);
     
     //let name:any = "olutayostep@gmail.com"
     // console.log(name.test(this.emailRegex) );
      
     this.firstName = ""; this.lastName=""; this.email= ""; this.password="";
     
     this.router.navigate(['/dashboard'])
  }

}

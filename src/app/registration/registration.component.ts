import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  public status=0
  public firstName=""; public lastName=""; public email=""; public password="";
  public product_name = ""
  public form_obj = {firstName:'', lastName:"", email:"", password:""};
  public formArray:any = []
  
  ngOnInit(){this.status=0}

  addProduct (){
    //this.product_obj = {Name: this.product_name}
    
     this.form_obj = {firstName: "First Name: " + this.firstName,  lastName:"Last Name: " + this.lastName, email: "Email: " +this.email, password: "Password: " + this.password};
     this.formArray.push(this.form_obj);
    this.status=1;
    alert("registration successful" )
    this.firstName = ""; this.lastName=""; this.email= ""; this.password="";
    
    
    
  }

}

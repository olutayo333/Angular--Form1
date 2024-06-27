import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form1',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reactive-form1.component.html',
  styleUrl: './reactive-form1.component.css'
})
export class ReactiveForm1Component {
 constructor(public formBuilder:FormBuilder){}
 //USING FORM GROUP
  // public reactiveFormGroup = new FormGroup({
  //   firstName:new FormControl(""), 
  //   lastName:new FormControl(""),
  //   email:new FormControl(""),
  //   phoneNumber:new FormControl(""),
  //   password:new FormControl(""),

  // })

  //USING FORMBULIDER
  public reactiveFormGroup= this.formBuilder.group({
    firstName:['', Validators.required, Validators.minLength(10)],
    lastName:['', Validators.required],
    email:['',  [Validators.required, Validators.email]],
    phoneNumber:['', Validators.required],
    password:['', Validators.required],
    over18:['', Validators.required],
  })    

  // validatePhone(control:AbstractControl) : {[key: string]: any} | void {
  //   if(control.value){ 
  //     if(control.value.indexOf("+") == -1){
  //       return{noCountryCode: true}
  //     }
  //   }
  // }

  register (){
    //if(this.reactiveFormGroup.valid){
      
    console.log(this.reactiveFormGroup.value  );
    //Getting individual field value
    console.log(this.reactiveFormGroup.controls['firstName'].value );
    console.log(this.reactiveFormGroup.get('firstName')?.value);
    //resetting values 
    this.reactiveFormGroup.controls.firstName.setValue('');
    //}
  }
}

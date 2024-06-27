import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactive-form2.component.html',
  styleUrl: './reactive-form2.component.css'
})
export class ReactiveForm2Component {
  public message='';
  constructor(public builder:FormBuilder){};
  public formtwo = this.builder.group({
    
    firstName:['', [Validators.required, Validators.minLength(2)  ] ],
    lastName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    // email:['',  [Validators.required, Validators.email, Validators.minLength(10)]],
    email:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)],  ],
    phoneNumber:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    age:['', [Validators.required, Validators.min(18), Validators.max(30) ]],
    address:['', [Validators.required, Validators.minLength(20),] ],
    // password:['', [Validators.required, Validators.minLength(8)]],
    password:['', [Validators.required, Validators.minLength(8),  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    over18:[false, Validators.required],
  })

  signup(){
    // console.log(this.formtwo); formtwo.invalid
    // if (this.formtwo.value['over18']==false){
    //     this.message='This input is required'
    // }
    if (this.formtwo.invalid){
      this.message='Input All Fields correctly'
    }
    else{
      console.log(this.formtwo.value);
      console.log(this.formtwo.value.email);
    
    this.formtwo.controls['firstName'].setValue('');
    this.formtwo.controls['lastName'].setValue('');
    this.formtwo.controls['email'].setValue('')
    this.formtwo.controls['password'].setValue('')
    }
    
    }
  
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  public firstName:string=''; public lastName:string=''; public email:string=''; public password:string='';
  public CB:boolean=false;
  
  register(){
    console.log(this.CB, this.firstName);
    
  }
}

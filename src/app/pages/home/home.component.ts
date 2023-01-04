import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public formLogin!: FormGroup;
  nombre!:string;

  constructor(private formBuilder: FormBuilder){
    
  }

}

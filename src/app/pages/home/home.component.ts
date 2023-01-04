import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public formLogin!: FormGroup;
  nombre!:string;
  email!:string;
  mensaje!:string;

  

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.formLogin = this.formBuilder.group({
      nombre:['',
        [
          Validators.required,
          Validators.minLength(10)
          // Validators
        ]      
      ],
      email:['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      mensaje:['',
        [
          Validators.required
        ]
      ],
    })

  }

  send():any{
    console.log(this.formLogin.value);
  }


}

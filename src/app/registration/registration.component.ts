import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form!:FormGroup;
  submitted:boolean=false;


  constructor(
    private router: Route,
    private auth: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      full_name: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      referral_code:[''],
      device_details: [{"device": 'dummy'}],
      location: [''],
    })
  }

  get f() { return this.form.controls; }

  submit(): void{
    this.submitted = true;
    let data = this.form.getRawValue()
    //submit to registration API
    this.auth.register(data)
    .subscribe(
      data => {
       
        this.router.navigate(['/login'])
      },
      err => {
        console.log('ERROR: ' ,err)
        // this.showError=true
    }
    )
  }


}

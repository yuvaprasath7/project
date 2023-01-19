import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registervalidation',
  templateUrl: './registervalidation.component.html',
  styleUrls: ['./registervalidation.component.scss']
})
export class RegistervalidationComponent implements OnInit {
  register!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerValidation();
  }

  // get valid() {
  //   return this.register.controls;
  // }

  registerValidation() {
    this.register = new FormGroup({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.register.value);
    console.log(this.register.valid);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginvalidation',
  templateUrl: './loginvalidation.component.html',
  styleUrls: ['./loginvalidation.component.scss']
})
export class LoginvalidationComponent implements OnInit {
  login!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginValidation();
  }

  loginValidation() {
    this.login = new FormGroup({
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
    });
  }
}

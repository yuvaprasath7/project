import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/helpers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Data: any = [] = [];
  constructor(private authService: AuthService, private routes: Router) { }
  SignupForm: FormGroup | any;
  ngOnInit(): void {
    this.formValid();
    this.authService.IsloggerOut();
  }

  formValid() {
    this.SignupForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    })
  }

  loginToken() {
    this.Data = {
      Username: this.SignupForm.value.userName,
      Password: this.SignupForm.value.password
    }
    this.authService.getToken(this.Data).subscribe({
      next: ((res: any) => {
        this.Data = res;
        this.routes.navigate(["dashboard"]);
      })
    })
  }

}








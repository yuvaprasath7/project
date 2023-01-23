import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginvalidation',
  templateUrl: './loginvalidation.component.html',
  styleUrls: ['./loginvalidation.component.scss']
})
export class LoginvalidationComponent implements OnInit {
  model: any = {};
  showPassword: boolean =false;
  constructor() { }

  ngOnInit(): void {

  }

}

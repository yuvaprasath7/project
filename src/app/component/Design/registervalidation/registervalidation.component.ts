import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registervalidation',
  templateUrl: './registervalidation.component.html',
  styleUrls: ['./registervalidation.component.scss']
})
export class RegistervalidationComponent implements OnInit {
  genders = ['male', 'female'];

  model: any = {};
  constructor() {
  }

  ngOnInit(): void {

  }




}

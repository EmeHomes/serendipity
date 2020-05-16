import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-deploy',
  templateUrl: './user-deploy.component.html',
  styleUrls: ['./user-deploy.component.css']
})
export class UserDeployComponent implements OnInit {

  task: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.task  =  this.formBuilder.group({
      taskName: [''],
      description: [''],
      start_date: [''],
      finish_date: [''],
      status_id: ['', Validators.required],
    });
  }

}

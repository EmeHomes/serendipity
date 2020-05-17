import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StatusModel} from "../../../models/status.model";
import {StatusService} from "../../../services/status.service";

@Component({
  selector: 'app-user-deploy',
  templateUrl: './user-deploy.component.html',
  styleUrls: ['./user-deploy.component.css']
})
export class UserDeployComponent implements OnInit {

  task: FormGroup;
  status: StatusModel[];

  constructor(
    private formBuilder: FormBuilder,
    private statusService: StatusService
  ) { }

  ngOnInit(): void {
    this.getStatus();
    this.task  =  this.formBuilder.group({
      taskName: [''],
      description: [''],
      start_date: [''],
      finish_date: [''],
      status_id: ['', Validators.required]
    });
  }

  getStatus() {
    this.statusService.findAll().subscribe(res => this.status = res);
  }

}

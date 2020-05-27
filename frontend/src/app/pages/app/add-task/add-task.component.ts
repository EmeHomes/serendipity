import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskModel} from '../../../models/task.model';
import {TaskService} from '../../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StatusService} from '../../../services/status.service';
import {StatusModel} from '../../../models/status.model';
import {ProfileService} from "../../../services/profile.service";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: TaskModel;
  taskForm: FormGroup;
  status: StatusModel[];
  users: UserModel[];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private formBuilder: FormBuilder,
    private statusService: StatusService,
    private profileService: ProfileService) { }

  ngOnInit(): void {

    this.getStatus();
    this.getUsers();

    this.taskForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status_id: ['', Validators.required],
      user_id: ['', Validators.required],
      start_date: [''],
      finish_date: [''],
    });
  }
  save() {
    this.taskService.new(this.taskForm).subscribe(profile => alert('guardada o no'));
  }

  getStatus() {
    this.statusService.findAll().subscribe(res => this.status = res);
  }

  getUsers() {
    this.profileService.findAll().subscribe(res => this.users = res);
  }
}

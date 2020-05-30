import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskModel} from '../../../models/task.model';
import {TaskService} from '../../../services/task.service';
import {StatusModel} from "../../../models/status.model";
import {UserModel} from "../../../models/user.model";
import {StatusService} from "../../../services/status.service";
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.css']
})
export class EditTaskPageComponent implements OnInit {

  taskId;
  task: TaskModel;
  taskForm: FormGroup;
  status: StatusModel[];
  users: UserModel[];
  errorMessage;
  successMessage;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private statusService: StatusService,
    private profileService: ProfileService) { }


  ngOnInit(): void {

    this.getStatus();
    this.getUsers();

    this.taskId = this.route.snapshot.paramMap.get('taskId');

    this.taskForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status_id: ['', Validators.required],
      user_id: ['', Validators.required],
      start_date: [''],
      finish_date: [''],
    });

    this.taskService.find(this.taskId).subscribe(res => {
      this.task = res;
      this.taskForm.get('name').patchValue(res.name);
      this.taskForm.get('description').patchValue(res.description);
      this.taskForm.get('start_date').patchValue(res.start_date);
      this.taskForm.get('finish_date').patchValue(res.finish_date);
      this.taskForm.get('status_id').patchValue(res.status.id);
      this.taskForm.get('user_id').patchValue(res.user_id);
    });
  }

  save() {
    if (this.taskForm.invalid) {
      this.errorMessage = 'Debes rellenar todos los campos para continuar';
      return;
    }
    this.taskService.save(this.taskForm, this.task.id).subscribe(res => {
      if (1 === res) {
        this.successMessage = 'La tarea se ha modificado con éxito';
      } else {
        this.errorMessage = 'Ha ocurrido un error, inténtelo más tarde';
      }
    });
  }

  getStatus() {
    this.statusService.findAll().subscribe(res => this.status = res);
  }

  getUsers() {
    this.profileService.findAll().subscribe(res => this.users = res);
  }

}

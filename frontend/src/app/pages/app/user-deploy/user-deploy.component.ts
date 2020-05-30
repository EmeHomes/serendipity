import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatusModel} from '../../../models/status.model';
import {StatusService} from '../../../services/status.service';
import {TaskService} from '../../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskModel} from '../../../models/task.model';

@Component({
  selector: 'app-user-deploy',
  templateUrl: './user-deploy.component.html',
  styleUrls: ['./user-deploy.component.css']
})
export class UserDeployComponent implements OnInit {

  taskForm: FormGroup;
  status: StatusModel[];
  task: TaskModel;
  taskId;
  move;
  errorMessage;
  successMessage;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private statusService: StatusService
  ) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('taskId');

    this.getStatus();

    this.taskForm  =  this.formBuilder.group({
      name: [''],
      description: [''],
      start_date: [''],
      finish_date: [''],
      status_id: ['', Validators.required],
      user_id: []
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

  getStatus() {
    this.statusService.findAll().subscribe(res => this.status = res);
  }

  save() {
    if (this.taskForm.invalid) {
      this.errorMessage = 'Debes rellenar todos los campos para continuar';
      return;
    }
    this.taskService.save(this.taskForm, this.task.id).subscribe(res => {
      if (1 === res) {
        this.successMessage = 'Los datos han sido actualizados con éxito';
      } else {
        this.errorMessage = 'Ha ocurrido un error, inténtelo más tarde';
      }
    });

  }

}

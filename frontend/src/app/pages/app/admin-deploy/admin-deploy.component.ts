import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatusModel} from '../../../models/status.model';
import {TaskModel} from '../../../models/task.model';
import {TaskService} from '../../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StatusService} from '../../../services/status.service';

@Component({
  selector: 'app-admin-deploy',
  templateUrl: './admin-deploy.component.html',
  styleUrls: ['./admin-deploy.component.css']
})
export class AdminDeployComponent implements OnInit {

  taskForm: FormGroup;
  status: StatusModel[];
  task: TaskModel;
  taskId;
  move;

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
      status_id: ['', Validators.required]
    });

    this.taskService.find(this.taskId).subscribe(res => {
      this.task = res;
      this.taskForm.get('name').patchValue(res.name);
      this.taskForm.get('description').patchValue(res.description);
      this.taskForm.get('start_date').patchValue(res.start_date);
      this.taskForm.get('finish_date').patchValue(res.finish_date);
      this.taskForm.get('status_id').patchValue(res.status.id);
    });
  }

  getStatus() {
    this.statusService.findAll().subscribe(res => this.status = res);
  }

  save() {
    this.taskService.save(this.taskForm, this.task.id).subscribe();
    this.router.navigate(['admin-panel']);
  }
}

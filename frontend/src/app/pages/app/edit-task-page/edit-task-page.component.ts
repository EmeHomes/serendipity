import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskModel} from '../../../interfaces/task.model';
import {TaskService} from '../../../services/task.service';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.css']
})
export class EditTaskPageComponent implements OnInit {

  taskId;
  task: TaskModel;
  taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('taskId');

    this.taskForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status_id: ['', Validators.required],
    });

    this.taskService.find(this.taskId).subscribe(res => {
      this.task = res;
      this.taskForm.get('name').patchValue(res.name);
      this.taskForm.get('description').patchValue(res.description);
      this.taskForm.get('status_id').patchValue(res.status_id);
    });
  }

  save() {
    this.taskService.save(this.taskForm, this.task.id).subscribe(profile => console.log(profile));
  }

}

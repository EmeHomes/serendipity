import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskModel} from '../../../models/task.model';
import {TaskService} from '../../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: TaskModel;
  taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status_id: ['', Validators.required],
      user_id: ['', Validators.required],
    });
  }
  save() {
    this.taskService.save(this.taskForm, this.task.id).subscribe(profile => console.log(profile));
  }
}

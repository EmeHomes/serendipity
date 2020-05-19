import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import {TaskModel} from "../../../models/task.model";

@Component({
  selector: 'app-work-box',
  templateUrl: './work-box.component.html',
  styleUrls: ['./work-box.component.css']
})
export class WorkBoxComponent implements OnInit {

  tasks: TaskModel[];

  constructor(private taskService: TaskService, private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
      /*if (!this.sessionService) {
        this.router.navigate(['login']);
      }*/
      this.taskService.findAll().subscribe(res => this.tasks = res);
    }
      scrollTo(elementId: string): void {

        if ('top' === elementId ) {
          top.scrollTo(0, 0);
        }

        const element = document.getElementById(elementId);
        element.scrollIntoView({behavior: 'smooth'});
    }

    goToTask(taskId: number) {
      this.router.navigate(['user-deploy/' + taskId]);
    }

}

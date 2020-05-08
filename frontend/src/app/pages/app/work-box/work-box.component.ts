import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { SessionService } from '../../../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-box',
  templateUrl: './work-box.component.html',
  styleUrls: ['./work-box.component.css']
})
export class WorkBoxComponent implements OnInit {

  tasks: [];

  constructor(private taskService: TaskService, private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    if(!this.sessionService.token) {
      this.router.navigate(['login']);
    }
    this.taskService.findAll().subscribe(res => this.tasks = res);
  }

}

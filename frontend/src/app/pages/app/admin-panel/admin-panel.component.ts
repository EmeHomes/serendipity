import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {ProfileService} from "../../../services/profile.service";
import {Router} from "@angular/router";

declare var $;

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  taskTableData = [];
  userTableData = [];
  @ViewChild('dataTableTasks', {static: true}) taskTable;
  @ViewChild('dataTableUsers', {static: true}) userTable;

  constructor(private taskService: TaskService, private profileService: ProfileService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTaskTable();
    this.getUserTable();
  }

  getTaskTable() {
    this.taskService.findAll().subscribe(data => {
      this.taskTableData = data;
      const table = $('#task-table').DataTable({
        data: this.taskTableData,
        columns: [
          {title: 'ID', data: 'id'},
          {title: 'Name', data: 'name'},
          {title: 'Description', data: 'description'},
          {title: 'Estado', data: 'status_id'},
          {
            title: 'Acción',
            data: null,
            orderable: true,
            render: () => `<button id="edit-action">Editar</button>`
          }
        ],
      });
      $('.dataTables_wrapper').css('width', '100%');
      $('#task-table tbody').off( 'click', '#edit-action').on( 'click', '#edit-action', function() {
        const id = table.row($(this).parent()).data().id;
        const button = $('#taskButton');
        button.attr('data-id', id);
        button.click();
      });
    });
  }

  getUserTable() {
    this.profileService.findAll().subscribe(data => {
      this.userTableData = data;
      const table = $('#user-table').DataTable({
        data: this.userTableData,
        columns: [
          {title: 'ID', data: 'id'},
          {title: 'Name', data: 'name'},
          {title: 'Rol', data: 'role'},
          {title: 'Username', data: 'username'},
          {
            title: 'Acción',
            data: null,
            orderable: true,
            render: () => `<button id="edit-action">Editar</button>`
          }
        ],
      });
      $('.dataTables_wrapper').css('width', '100%');
      $('#user-table tbody').off( 'click', '#edit-action').on( 'click', '#edit-action', function() {
        const id = table.row($(this).parent()).data().id;
        const button = $('#userButton');
        button.attr('data-id', id);
        button.click();
      });
    });
  }

  userClick(event) {
    const userId = event.target.getAttribute('data-id');
    this.router.navigate(['edit-user/' + userId]);
  }

  taskClick(event) {
    const taskId = event.target.getAttribute('data-id');
    this.router.navigate(['edit-task/' + taskId]);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/web/home-page/home-page.component';
import { LoginComponent } from './pages/web/login/login.component';
import { UserViewComponent } from './pages/app/user-view/user-view.component';
import { UsPageComponent } from './pages/web/us-page/us-page.component';
import { ClientPageComponent } from './pages/web/client-page/client-page.component';
import { AppPageComponent } from './pages/app/app-page/app-page.component';
import { ProfilePageComponent } from './pages/app/profile-page/profile-page.component';
import {UserDeployComponent} from './pages/app/user-deploy/user-deploy.component';
import {EditUserPageComponent} from './pages/app/edit-user-page/edit-user-page.component';
import {AdminPanelComponent} from './pages/app/admin-panel/admin-panel.component';
import {EditTaskPageComponent} from './pages/app/edit-task-page/edit-task-page.component';
import {AddTaskComponent} from './pages/app/add-task/add-task.component';
import {AddUserComponent} from './pages/app/add-user/add-user.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-page', component: AppPageComponent},
  { path: 'user-view', component: UserViewComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'us', component: UsPageComponent},
  { path: 'IClient', component: ClientPageComponent},
  { path: 'profile-page/:userId', component: ProfilePageComponent},
  { path: 'user-deploy', component: UserDeployComponent},
  { path: 'edit-user/:userId', component: EditUserPageComponent},
  { path: 'edit-task/:taskId', component: EditTaskPageComponent},
  { path: 'add-task', component: AddTaskComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: '**', component: HomePageComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import {AdminDeployComponent} from './pages/app/admin-deploy/admin-deploy.component';
import {AuthorizatedGuard} from './services/authorizated-guard.service';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'us', component: UsPageComponent},
  { path: 'IClient', component: ClientPageComponent},
  { path: 'app-page', component: AppPageComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'user-view', component: UserViewComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'admin-panel', component: AdminPanelComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'profile-page/:userId', component: ProfilePageComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'user-deploy/:taskId', component: UserDeployComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'admin-deploy/:taskId', component: AdminDeployComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'edit-user/:userId', component: EditUserPageComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'edit-task/:taskId', component: EditTaskPageComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'add-task', component: AddTaskComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'add-user', component: AddUserComponent, canActivate: [ AuthorizatedGuard ]},
  { path: '**', component: HomePageComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

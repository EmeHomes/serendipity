import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/web/home-page/home-page.component';
import { HeaderWebComponent } from './pages/web/header-web/header-web.component';
import { LoginComponent } from './pages/web/login/login.component';
import { WorkBoxComponent } from './pages/app/work-box/work-box.component';
import { HeaderAppComponent } from './pages/app/header-app/header-app.component';
import { AdminPanelComponent } from './pages/app/admin-panel/admin-panel.component';
import { UserViewComponent } from './pages/app/user-view/user-view.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './pages/app/profile-page/profile-page.component';
import { UsPageComponent } from './pages/web/us-page/us-page.component';
import { ClientPageComponent } from './pages/web/client-page/client-page.component';
import { ContactPageComponent } from './pages/web/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AppPageComponent } from './pages/app/app-page/app-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDeployComponent } from './pages/app/user-deploy/user-deploy.component';
import { EditUserPageComponent } from './pages/app/edit-user-page/edit-user-page.component';
import { EditTaskPageComponent } from './pages/app/edit-task-page/edit-task-page.component';
import { AddUserComponent } from './pages/app/add-user/add-user.component';
import { AddTaskComponent } from './pages/app/add-task/add-task.component';
import { ParallaxPortalComponent } from './pages/web/parallax-portal/parallax-portal.component';
import { AdminDeployComponent } from './pages/app/admin-deploy/admin-deploy.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderWebComponent,
    LoginComponent,
    WorkBoxComponent,
    HeaderAppComponent,
    AdminPanelComponent,
    UserViewComponent,
    ProfilePageComponent,
    UsPageComponent,
    ClientPageComponent,
    ContactPageComponent,
    AppPageComponent,
    UserDeployComponent,
    EditUserPageComponent,
    EditTaskPageComponent,
    AddUserComponent,
    AddTaskComponent,
    ParallaxPortalComponent,
    AdminDeployComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

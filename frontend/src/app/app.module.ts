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
import { AdminViewComponent } from './pages/app/admin-view/admin-view.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './pages/app/profile-page/profile-page.component';
import { UsPageComponent } from './pages/web/us-page/us-page.component';
import { ClientPageComponent } from './pages/web/client-page/client-page.component';
import { ContactPageComponent } from './pages/web/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AppPageComponent } from './pages/app/app-page/app-page.component';
import { FormsModule } from '@angular/forms';

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
    AdminViewComponent,
    ProfilePageComponent,
    UsPageComponent,
    ClientPageComponent,
    ContactPageComponent,
    AppPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

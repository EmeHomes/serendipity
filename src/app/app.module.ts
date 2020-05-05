import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderWebComponent } from './header-web/header-web.component';
import { LoginComponent } from './login/login.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { WorkBoxComponent } from './work-box/work-box.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsPageComponent } from './us-page/us-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WebPageComponent } from './web-page/web-page.component';
import { CalendarBoxComponent } from './calendar-box/calendar-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderWebComponent,
    LoginComponent,
    UserBoxComponent,
    WorkBoxComponent,
    HeaderAppComponent,
    AdminPanelComponent,
    UserViewComponent,
    AdminViewComponent,
    ProfilePageComponent,
    UsPageComponent,
    ClientPageComponent,
    ContactPageComponent,
    WebPageComponent,
    CalendarBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

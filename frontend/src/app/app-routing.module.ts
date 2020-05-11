import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/web/home-page/home-page.component';
import { LoginComponent } from './pages/web/login/login.component';
import { UserViewComponent } from './pages/app/user-view/user-view.component';
import { UsPageComponent } from './pages/web/us-page/us-page.component';
import { ClientPageComponent } from './pages/web/client-page/client-page.component';
import { AppPageComponent } from './pages/app/app-page/app-page.component';
import { ProfilePageComponent } from './pages/app/profile-page/profile-page.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-page', component: AppPageComponent},
  { path: 'user-view', component: UserViewComponent },
  { path: 'us', component: UsPageComponent},
  { path: 'IClient', component: ClientPageComponent},
  { path: 'profile-page', component: ProfilePageComponent},
  { path: '**', component: HomePageComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
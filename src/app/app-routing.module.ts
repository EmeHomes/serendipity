import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsPageComponent } from './us-page/us-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { AppPageComponent } from './app-page/app-page.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-page', component: AppPageComponent},
  { path: 'user-view', component: UserViewComponent },
  { path: 'us', component: UsPageComponent},
  { path: 'IClient', component: ClientPageComponent},
  { path: '**', component: HomePageComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
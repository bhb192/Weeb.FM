import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './components/login/login.component';
import { ProfileComponent }   from './components/profile/profile.component';
import { RegisterComponent }   from './components/register/register.component';
import { HomeComponent }   from './components/home/home.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'profile/:id',  component: ProfileComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'login',  component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTokenGuard } from './auth-token.guard';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    component: SignupComponent, path: "signup"
  },
  {
    component: LoginComponent, path: "login"
  },
  {
    component: LogoutComponent, path: "logout"
  },
  {
    component: HomeComponent, path: "home",canActivate:[AuthTokenGuard]
  },
  {
    component: CategoryComponent, path: "category",canActivate:[AuthTokenGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

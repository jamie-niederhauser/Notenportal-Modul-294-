import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './components/login/login.component';
import { KlasseComponent } from './components/klasse/klasse.component';
import { AppAuthGuard } from './guard/app.auth.guard';
import { AppRoles } from './app.roles';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [  {
  path: 'Home',
  component: HomeComponent,
  canActivate: [AppAuthGuard],
  data: {
    roles: [AppRoles.Read],
    pagetitle: 'Alle Spiele'
  }
},
{
  path: "",
  component: AppLoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

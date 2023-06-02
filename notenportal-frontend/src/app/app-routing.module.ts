import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './components/login/login.component';
import { KlasseComponent } from './components/klasse/klasse.component';
import { AppAuthGuard } from './guard/app.auth.guard';
import { AppRoles } from './app.roles';
import { HomeComponent } from './components/home/home.component';
import { NotenComponent } from './components/noten/noten.component';
import { KlasseDetailsComponent } from './components/klasse-details/klasse-details.component';

const routes: Routes = [
  {
    path: 'klasse',
    component: KlasseComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Klassen'
    }
  },
  {
    path: 'noten',
    component: NotenComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Noten'
    }
  },
  {
    path: 'klasse-details',
    component: KlasseDetailsComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Klassen'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

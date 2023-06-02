import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './components/login/login.component';
import { KlasseComponent } from './components/klasse/klasse.component';
import { AppAuthGuard } from './guard/app.auth.guard';
import { AppRoles } from './app.roles';
import { HomeComponent } from './components/home/home.component';
import { NotenComponent } from './components/noten/noten.component';
import { KlasseDetailsComponent } from './components/klasse-details/klasse-details.component';
import { SchuelerComponent } from './components/schueler/schueler.component';
import { SchuelerDetailsComponent } from './components/schueler-details/schueler-details.component';
import { SchulfachComponent } from './components/schulfach/schulfach.component';

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
    path: 'schulfach',
    component: SchulfachComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Schulfaecher'
    }
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Home'
    }
  },
  {
    path: 'schueler',
    component: SchuelerComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Schuler'
    }
  },{
    path: 'klasse/:id',
    pathMatch: 'full',
    component: KlasseDetailsComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Update],
      pagetitle: 'Klasse bearbeiten'
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
  {
    path: 'schueler-details',
    component: SchuelerDetailsComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Schueler'
    }
  },{
    path: 'schuler/:id',
    pathMatch: 'full',
    component: SchuelerDetailsComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Update],
      pagetitle: 'Klasse bearbeiten'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

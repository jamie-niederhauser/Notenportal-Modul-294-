import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './components/login/login.component';
import { KlasseComponent } from './components/klasse/klasse.component';
import { HomeComponent } from './components/home/home.component';
import { SchuelerComponent } from './components/schueler/schueler.component';
import { SchulfachComponent } from './components/schulfach/schulfach.component';
import { NotenComponent } from './components/noten/noten.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from './environments/environment';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppAuthGuard } from './guard/app.auth.guard';
import { AppAuthService } from './service/app.auth.service';
import { IsInRolesDirective } from './directives/is-in-roles.dir';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { KlasseDetailsComponent } from './components/klasse-details/klasse-details.component';
import { ReactiveFormsModule } from '@angular/forms';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/ILV-Realm',
  requireHttps: false,
  redirectUri: environment.frontendBaseUrl,
  postLogoutRedirectUri: environment.frontendBaseUrl,
  clientId: 'demoapp',
  scope: 'openid profile roles offline_access',
  responseType: 'code',
  showDebugInformation: true,
  requestAccessToken: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshTimeout: 500,
  clearHashAfterLogin: true,
};

export function storageFactory(): OAuthStorage {
  return sessionStorage;
}



@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HomeComponent,
    KlasseComponent,
    SchuelerComponent,
    SchulfachComponent,
    NotenComponent,
    IsInRolesDirective,
    ConfirmDialogComponent,
    KlasseDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatListModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }), OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true
      }
}), BrowserAnimationsModule],
providers: [
  {
    provide: AuthConfig,
    useValue: authConfig
  },
  {
    provide: OAuthStorage,
    useFactory: storageFactory
  },
  AppAuthGuard
],
bootstrap: [AppComponent]
})
export class AppModule {
constructor(authService: AppAuthService) {
  authService.initAuth().finally()
}
}

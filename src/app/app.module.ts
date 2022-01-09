import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QcmComponent } from './qcm/qcm.component';
import { ResultatComponent } from './resultat/resultat.component';
import { HomeEtuComponent } from './home-etu/home-etu.component';
import { HomeEnsComponent } from './home-ens/home-ens.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { QcmEtuComponent } from './qcm-etu/qcm-etu.component';
import { QcmEnsComponent } from './qcm-ens/qcm-ens.component';
import { AddEtuComponent } from './add-etu/add-etu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QcmComponent,
    ResultatComponent,
    HomeEtuComponent,
    HomeEnsComponent,
    AuthViewComponent,
    QcmEtuComponent,
    QcmEnsComponent,
    AddEtuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

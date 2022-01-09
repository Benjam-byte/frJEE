import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtuComponent } from './add-etu/add-etu.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { HomeComponent } from './home/home.component';
import { QcmComponent } from './qcm/qcm.component';
import { ResultatComponent } from './resultat/resultat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthViewComponent },
  { path: 'qcm/:id', component: QcmComponent },
  { path: 'res', component: ResultatComponent },
  { path : 'add/:id', component : AddEtuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

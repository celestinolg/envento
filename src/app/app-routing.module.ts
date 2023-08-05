import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule) },
  { path: 'participantes', loadChildren: () => import('./participantes/participantes.module').then(m => m.ParticipantesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

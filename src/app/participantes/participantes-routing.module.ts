import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantesComponent } from './participantes.component';

const routes: Routes = [{ path: '', component: ParticipantesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos.component';
import { FormEnventoComponent } from './form-envento/form-envento.component';

const routes: Routes = [
  { path: '', component: EventosComponent },
  { path: 'adicionar', component: FormEnventoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosComponent } from './eventos.component';
import { FormEnventoComponent } from './form-envento/form-envento.component';


@NgModule({
  declarations: [
    EventosComponent,
    FormEnventoComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    FormsModule
  ]
})
export class EventosModule { }

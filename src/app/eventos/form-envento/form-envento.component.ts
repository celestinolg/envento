import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-form-envento',
  templateUrl: './form-envento.component.html',
  styleUrls: ['./form-envento.component.scss']
})
export class FormEnventoComponent implements OnInit {

  evento!: Evento;

  constructor(private router: Router, private eventoService: EventoService){

  }

  ngOnInit(): void {
    this.limparFormulario();
  }

  limparFormulario(){
    this.evento = {
      id: 0,
      titulo: '',
      descricao: '',
      data: new Date(),
      local: '',
      participantes: []
    };
  }

  salvarEvento() {
    this.eventoService.adicionarEvento(this.evento);
    console.log('Dados do evento:', this.evento);
    this.limparFormulario();
  }

  cancelar() {
    this.router.navigate(['eventos']);
  }
}

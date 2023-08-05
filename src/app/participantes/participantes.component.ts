import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.scss'],
})
export class ParticipantesComponent {
  eventos!: Evento[];

  eventoSelecionado: Evento | null = null;

  constructor(private eventoService: EventoService, private router: Router) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.listaEnvetos();
  }

  selecionarEvento(evento: Evento) {
    this.eventoSelecionado = evento;
  }

  voltar() {
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Router } from '@angular/router';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  eventos!: Evento[];

  constructor(private eventoService: EventoService, private router: Router){}

  ngOnInit(): void {
    this.eventos = this.eventoService.listaEnvetos();
    console.log(this.eventos);

  }

  adicionarEvento() {
    this.router.navigate(['eventos/adicionar']);
  }

  voltar() {
    this.router.navigate(['/']);
  }

}

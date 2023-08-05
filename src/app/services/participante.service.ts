import { Injectable } from '@angular/core';
import { Participante } from '../models/Participante';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  private participantes: Participante[] = [
    {
      id: 1,
      nome: 'Alice',
      email: 'alice@example.com',
      telefone: '921 323 234',
      eventosInscritos: []
    },
    {
      id: 2,
      nome: 'Bob',
      email: 'bob@example.com',
      telefone: '934 534 345',
      eventosInscritos: []
    },
    {
      id: 3,
      nome: 'Carol',
      email: 'carol@example.com',
      telefone: '992 434 355',
      eventosInscritos: []
    }
  ];

  constructor() {}


  listaParticipates(): Participante[] {
    return this.participantes;
  }


  listaParticipanteId(id: number): Participante | undefined {
    return this.participantes.find(participante => participante.id === id);
  }


  adicionarParticipante(participante: Participante): void {
    this.participantes.push(participante);
  }


  editarParticipante(participante: Participante): void {
    const index = this.participantes.findIndex(u => u.id === participante.id);
    if (index !== -1) {
      this.participantes[index] = participante;
    }
  }


  excluirParticipante(id: number): void {
    this.participantes = this.participantes.filter(participante => participante.id !== id);
  }


  inscreverParticipanteEmEvento(participante: Participante, evento: Evento): void {
      participante.eventosInscritos?.push(evento);
  }


  cancelarInscricaoParticipantesEvento(participante: Participante, evento: Evento): void {
    participante.eventosInscritos = participante.eventosInscritos?.filter(eventoInscrito => eventoInscrito.id !== evento.id);
  }
}

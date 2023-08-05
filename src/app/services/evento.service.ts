import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private eventos!: Evento[];

  constructor() {
    this.eventos = [
      {
        id: 1,
        titulo: 'Evento de Abertura',
        descricao: 'Um evento incrível para abrir nossa temporada!',
        data: new Date('2023-08-10'),
        local: 'Centro de Convenções',
        participantes: [
          {
            id: 1,
            nome: 'Miguel',
            email: 'miguel@example.com'
          },
        ],
      },
      {
        id: 2,
        titulo: 'Conferência de Tecnologia',
        descricao: 'A maior conferência de tecnologia do ano.',
        data: new Date('2023-09-15'),
        local: 'Centro de Eventos Tecnológicos',
        participantes: [{ id: 3, nome: 'Alice', email: 'alice@example.com' }],
      },
      {
        id: 3,
        titulo: 'Workshop de Design',
        descricao: 'Aprenda as melhores práticas de design com especialistas.',
        data: new Date('2023-10-20'),
        local: 'Estúdio de Design Criativo',
        participantes: [
          { id: 1, nome: 'Participante 1', email: 'participante1@example.com' },
          { id: 2, nome: 'Participante 2', email: 'participante2@example.com' },
        ],
      },
      {
        id: 4,
        titulo: 'Apupu',
        descricao: 'Ciencia da festividade Imoral Angolana.',
        data: new Date('2023-08-05'),
        local: 'Zona Desconhecida',
        participantes: [],
      },
    ];
  }

  listaEnvetos(): Evento[] {
    return this.eventos;
  }

  listaEventoId(id: number): Evento | undefined {
    return this.eventos.find((evento) => evento.id === id);
  }

  adicionarEvento(evento: Evento): void {
    this.eventos.push(evento);
  }

  editarEvento(evento: Evento): void {
    const index = this.eventos.findIndex((e) => e.id === evento.id);
    if (index !== -1) {
      this.eventos[index] = evento;
    }
  }

  excluirEvento(id: number): void {
    this.eventos = this.eventos.filter((evento) => evento.id !== id);
  }
}

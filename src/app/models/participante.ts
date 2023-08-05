import { Evento } from "./evento";

export interface Participante {
  id: number;
  nome?: string;
  email?: string;
  telefone?: string;
  eventosInscritos?: Evento[];
}

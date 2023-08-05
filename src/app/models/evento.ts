import { Participante } from "./participante";


export interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  data: Date;
  local: string;
  participantes: Participante[];
}

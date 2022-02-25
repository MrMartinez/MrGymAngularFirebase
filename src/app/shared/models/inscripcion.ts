import { DocumentReference } from '@angular/fire/compat/firestore';

export interface Inscripcion {
  id?: string;
  fechaInicio: string;
  fechaFinal: string;
  itbis: number;
  subTotal: number;
  total: number;
  cliente: string;
  precio: string;
}

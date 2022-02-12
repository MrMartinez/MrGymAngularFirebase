import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.interface';
import { Observable } from 'rxjs';
import { async } from '@firebase/util';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  clientes!: Observable<Cliente[]>;
  private clientesCollection!: AngularFirestoreCollection<Cliente>;
  constructor(private readonly afs: AngularFirestore) {
    this.clientesCollection = afs.collection<Cliente>('Clientes');
    this.listarClientes();
  }

  async guardarCambios(cliente: Cliente, clienteId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = clienteId || this.afs.createId();
        const data = { id, ...cliente };
        const result = this.clientesCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  private listarClientes(): void {
    this.clientes = this.clientesCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Cliente))
      );
  }
  async eliminarCliente(clienteId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.clientesCollection.doc(clienteId).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

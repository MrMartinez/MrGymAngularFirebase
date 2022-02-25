import { Precio } from './../../shared/models/precio';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PreciosService {
  precios!: Observable<Precio[]>;
  private preciosColletion!: AngularFirestoreCollection<Precio>;

  constructor(private afs: AngularFirestore) {
    this.preciosColletion = afs.collection<Precio>('Precios');
    this.listarPrecios();
  }

  private listarPrecios(): void {
    this.precios = this.preciosColletion
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((p) => p.payload.doc.data() as Precio))
      );
  }
  async guardarCambios(precio: Precio, precioId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = precioId || this.afs.createId();
        const data = { id, ...precio };
        const result = this.preciosColletion.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  async eliminarPrecio(precioId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.preciosColletion.doc(precioId).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

import { PreciosService } from './../../precios/services/precios.service';
import { Precio } from './../../shared/models/precio';
import { ClientesService } from './../../clientes/services/clientes.service';
import { query, where } from 'firebase/firestore';
import { Cliente } from 'src/app/shared/models/cliente.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Inscripcion } from './../../shared/models/inscripcion';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  inscripciones: any[] = [];
  //inscripciones!: Observable<Inscripcion[]>;
  private inscripcionesCollection!: AngularFirestoreCollection;
  constructor(
    private asf: AngularFirestore,
    private clienteServices: ClientesService,
    private precioServices: PreciosService
  ) {
    this.inscripcionesCollection = asf.collection<Inscripcion>('Inscripciones');
    this.listarInscripciones();
  }

  listarInscripciones() {
    let listadoClientes: Cliente[] = [];
    let losClientes = this.clienteServices.clientes;
    losClientes.subscribe((clientes) => {
      clientes.forEach((item) => {
        listadoClientes.push(item);
      });
    });

    let listadoPrecios: Precio[] = [];
    let losPrecios = this.precioServices.precios;
    losPrecios.subscribe((precios) => {
      precios.forEach((item) => {
        listadoPrecios.push(item);
      });
    });
    this.asf
      .collection('Inscripciones')
      .snapshotChanges()
      .subscribe((resp) => {
        resp.forEach((item: any) => {
          let obj: any = item.payload.doc.data();
          obj.id = item.payload.doc.id;

          let cliente = listadoClientes.find((x) => {
            return x.id === obj.cliente;
          });
          obj.cliente = cliente;

          let precio = listadoPrecios.find((x) => {
            return x.id === obj.precio;
          });
          obj.precio = precio;
          this.inscripciones.push(obj);
        });
      });

    // .get()
    // .subscribe((resultado) => {
    //   resultado.forEach((item) => {
    //     let inscripcionActual: any = item.data();
    //     inscripcionActual.id = item.id;
    //     console.log('La inscripcion ---->' + inscripcionActual);
    //     console.log('El id del cliente ---->' + inscripcionActual.cliente.id);
    //   });
    // });
  }
}

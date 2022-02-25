import { Inscripcion } from './../../../shared/models/inscripcion';
import { InscripcionService } from './../../services/inscripcion.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-inscripcion',
  templateUrl: './listado-inscripcion.component.html',
  styleUrls: ['./listado-inscripcion.component.scss'],
})
export class ListadoInscripcionComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  listadoInscripciones = this.inscripcionesSvc.inscripciones;
  constructor(
    private router: Router,
    private inscripcionesSvc: InscripcionService
  ) {}

  ngOnInit(): void {}

  irInfoInscripcion(item: any): void {
    // this.navigationExtras.state!['value']! = item;
    // this.router.navigate(['inscripciones/detalles'], this.navigationExtras);

    //Otra forma de pasar objeto completo por la ruta con queryParams
    this.router.navigate(['inscripciones/detalles'], {
      queryParams: item,
    });
  }
  irCrarInscripcion() {
    alert('voy a crear una inscripcion nueva');
  }

  irEditarInscripcion(item: Inscripcion) {
    // this.navigationExtras.state!['value'] = item;
    // this.router.navigate(['inscripciones/editar'], this.navigationExtras);
    alert('voy a editar una inscripicon');
  }
  EliminarInscripcion(item: Inscripcion) {
    alert('elimino una inscripcion');
  }
}

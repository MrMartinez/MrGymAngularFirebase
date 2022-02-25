import { Inscripcion } from './../../../shared/models/inscripcion';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-inscripcion',
  templateUrl: './detalle-inscripcion.component.html',
  styleUrls: ['./detalle-inscripcion.component.scss'],
})
export class DetalleInscripcionComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  inscripcion!: Inscripcion;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.inscripcion = navigation?.extras?.queryParams as Inscripcion;
  }

  ngOnInit(): void {
    console.log(this.inscripcion);
  }
}

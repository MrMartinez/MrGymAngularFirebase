import { async } from '@firebase/util';
import { PreciosService } from './../../services/precios.service';
import { NavigationExtras, Router } from '@angular/router';
import { Precio } from './../../../shared/models/precio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.scss'],
})
export class ListadoPreciosComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  listadoPrecios = this.precioSvc.precios;

  constructor(private router: Router, private precioSvc: PreciosService) {}

  ngOnInit(): void {}

  irCrarPrecio() {
    this.router.navigateByUrl('precios/crear');
  }
  // irInfoPrecio(item: Precio): void {
  //   this.navigationExtras.state!['value']! = item;
  //   this.router.navigate(['precios/detalles'], this.navigationExtras);
  // }

  irEditarPrecio(item: Precio): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['precios/editar'], this.navigationExtras);
  }
  async irEliminar(precioId: string): Promise<void> {
    try {
      await this.precioSvc.eliminarPrecio(precioId);
    } catch (error) {
      console.log(error);
    }
  }
}

import { PreciosService } from './../../services/precios.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Precio } from 'src/app/shared/models/precio';

@Component({
  selector: 'app-detalle-precio',
  templateUrl: './detalle-precio.component.html',
  styleUrls: ['./detalle-precio.component.scss'],
})
export class DetallePrecioComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  precio!: Precio;
  constructor(
    private router: Router,
    private readonly preciosSvc: PreciosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.precio = navigation?.extras?.state!['value'];
  }

  ngOnInit(): void {
    if (typeof this.precio === 'undefined') {
      this.router.navigate(['precios/listar']);
    }
  }
  irEditarPrecio(item: Precio): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['precios/editar'], this.navigationExtras);
  }
  async EliminarPrecio(): Promise<void> {
    alert('ELIMINADO');
    // try {
    //   await this.preciosSvc.eliminarCliente(this.precio.id!);
    // } catch (error) {
    //   console.log(error);
    // }
  }
}

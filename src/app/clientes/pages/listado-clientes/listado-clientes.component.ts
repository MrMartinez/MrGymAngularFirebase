import { Observable } from 'rxjs';
import { Cliente } from '../../../shared/components/header/models/cliente.interface';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss'],
})
export class ListadoClientesComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  listadoClientes = this.clienteSvc.clientes;
  constructor(private router: Router, private clienteSvc: ClientesService) {}

  ngOnInit(): void {}
  irCrarCliente() {
    this.router.navigateByUrl('clientes/crear');
  }
  irInfoCliente(item: Cliente): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['clientes/detalles'], this.navigationExtras);

    //Otra forma de pasar objeto completo por la ruta con queryParams
    // this.route.navigate(['cliente/detalles'], {
    //   queryParams: item,
    // });
  }
  irEditarCliente(item: Cliente): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['clientes/editar'], this.navigationExtras);
  }
  async irEliminarCliente(cliente: Cliente): Promise<void> {
    try {
      await this.clienteSvc.eliminarCliente(cliente.id!);
    } catch (error) {
      console.log(error);
    }
  }
}

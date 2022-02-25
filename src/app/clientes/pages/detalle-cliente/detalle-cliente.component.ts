import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente.interface';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss'],
})
export class DetalleClienteComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  cliente: Cliente;
  constructor(
    private router: Router,
    private readonly clienteSvc: ClientesService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras?.state!['value'];
  }

  ngOnInit(): void {
    if (typeof this.cliente === 'undefined') {
      this.router.navigate(['clientes/listar']);
    }
  }

  irEditarCliente(item: Cliente): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['clientes/editar'], this.navigationExtras);
  }
  async irEliminarCliente(): Promise<void> {
    try {
      await this.clienteSvc.eliminarCliente(this.cliente.id!);
    } catch (error) {
      console.log(error);
    }
  }
}

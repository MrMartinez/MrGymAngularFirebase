import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/components/header/models/cliente.interface';

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
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras?.state!['value'];
  }

  ngOnInit(): void {
    if (typeof this.cliente === 'undefined') {
      this.router.navigate(['cliente/listar']);
    }
  }

  irEditarCliente(item: Cliente): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['cliente/editar'], this.navigationExtras);
  }
  irEliminarCliente(item: Cliente): void {
    alert('Eliminando Cliente');
  }
}

import { Cliente } from './../../../shared/components/header/models/cliente.interface';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  listadoClientes: Cliente[] = [
    {
      nombres: 'Welinton Aleiner',
      apellidos: 'Martinez Suero',
      cedula: '091-0003326-6',
      telefono: '809-869-9865',
      fechaNacimiento: new Date('1979-10-29'),
      email: 'mr@gmail.com',
      direccion: 'C/ 1era No. 25. Cancino',
      imgUrl:
        'https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg',
    },
    {
      nombres: 'Juan Alberto',
      apellidos: 'Reyes',
      cedula: '001-001552-6',
      telefono: '809-593-8969',
      fechaNacimiento: new Date('1979-10-29'),
      email: 'seVolvioLoco@hotmail.es',
      direccion: 'En su casa de los kilometros',
      imgUrl: 'https://blog.gosocket.net/wp-content/uploads/2016/03/test1.png',
    },
    {
      nombres: 'Danny ',
      apellidos: 'Cabareja de la Cruz',
      cedula: '001-0015289-2',
      telefono: '829-536-9396',
      fechaNacimiento: new Date('1979-10-29'),
      email: 'elTipoEsDuro@yahoo.es',
      direccion: 'Se fugo a los paises',
      imgUrl:
        'https://www.kindpng.com/picc/m/193-1930135_flat-user-icon-hd-png-download.png',
    },
    {
      nombres: 'Oliver Antonio',
      apellidos: 'Salcedo Perez',
      cedula: '001-0000596-6',
      telefono: '849-596-3230',
      fechaNacimiento: new Date('1979-10-29'),
      email: 'taFichao_com@hotmail.com',
      direccion: 'Calle no se sabe',
      imgUrl:
        'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  irCrarCliente() {
    this.router.navigateByUrl('cliente/crear');
  }
  irInfoCliente(item: Cliente): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['cliente/detalles'], this.navigationExtras);

    //Otra forma de pasar objeto completo por la ruta con queryParams
    // this.route.navigate(['cliente/detalles'], {
    //   queryParams: item,
    // });
  }
  irEditarCliente(item: Cliente): void {
    this.navigationExtras.state!['value']! = item;
    this.router.navigate(['cliente/editar'], this.navigationExtras);
  }
  irEliminarCliente(item: Cliente): void {
    alert('Eliminando Cliente');
  }
}

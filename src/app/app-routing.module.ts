import { DetalleClienteComponent } from './clientes/pages/detalle-cliente/detalle-cliente.component';
import { EditarClienteComponent } from './clientes/pages/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './clientes/pages/crear-cliente/crear-cliente.component';
import { ListadoClientesComponent } from './clientes/pages/listado-clientes/listado-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscripciones',
    pathMatch: 'full',
  },
  // {
  //   path: 'inscripciones',
  //   component: InscripcionesComponent,
  // },
  {
    path: 'clientes/listar',
    component: ListadoClientesComponent,
  },
  {
    path: 'clientes/crear',
    component: CrearClienteComponent,
  },
  {
    path: 'clientes/editar',
    component: EditarClienteComponent,
  },
  {
    path: 'clientes/detalles',
    component: DetalleClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

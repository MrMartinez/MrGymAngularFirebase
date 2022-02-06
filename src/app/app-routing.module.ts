import { DetalleClienteComponent } from './pages/clientes/detalle-cliente/detalle-cliente.component';
import { EditarClienteComponent } from './pages/clientes/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './pages/clientes/crear-cliente/crear-cliente.component';
import { ListadoClientesComponent } from './pages/clientes/listado-clientes/listado-clientes.component';
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
    path: 'cliente/listar',
    component: ListadoClientesComponent,
  },
  {
    path: 'cliente/crear',
    component: CrearClienteComponent,
  },
  {
    path: 'cliente/editar',
    component: EditarClienteComponent,
  },
  {
    path: 'cliente/detalles',
    component: DetalleClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { DetalleInscripcionComponent } from './inscripcion/pages/detalle-inscripcion/detalle-inscripcion.component';
import { EditarInscripcionComponent } from './inscripcion/pages/editar-inscripcion/editar-inscripcion.component';
import { CrearInscripcionComponent } from './inscripcion/pages/crear-inscripcion/crear-inscripcion.component';
import { ListadoInscripcionComponent } from './inscripcion/pages/listado-inscripcion/listado-inscripcion.component';
import { DetallePrecioComponent } from './precios/pages/detalle-precio/detalle-precio.component';
import { EditarPrecioComponent } from './precios/pages/editar-precio/editar-precio.component';
import { CrearPrecioComponent } from './precios/pages/crear-precio/crear-precio.component';
import { DetalleClienteComponent } from './clientes/pages/detalle-cliente/detalle-cliente.component';
import { EditarClienteComponent } from './clientes/pages/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './clientes/pages/crear-cliente/crear-cliente.component';
import { ListadoClientesComponent } from './clientes/pages/listado-clientes/listado-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPreciosComponent } from './precios/pages/listado-precios/listado-precios.component';

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
  //Ruta precios:
  {
    path: 'precios/listar',
    component: ListadoPreciosComponent,
  },
  {
    path: 'precios/crear',
    component: CrearPrecioComponent,
  },
  {
    path: 'precios/editar',
    component: EditarPrecioComponent,
  },
  {
    path: 'precios/detalles',
    component: DetallePrecioComponent,
  },

  //Ruta inscripcion:
  {
    path: 'inscripciones/listar',
    component: ListadoInscripcionComponent,
  },
  {
    path: 'inscripciones/crear',
    component: CrearInscripcionComponent,
  },
  {
    path: 'inscripciones/editar',
    component: EditarInscripcionComponent,
  },
  {
    path: 'inscripciones/detalles',
    component: DetalleInscripcionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

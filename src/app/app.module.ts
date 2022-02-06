import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListadoClientesComponent } from './pages/clientes/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './pages/clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './pages/clientes/editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './pages/clientes/detalle-cliente/detalle-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoClientesComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

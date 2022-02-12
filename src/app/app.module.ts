import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListadoClientesComponent } from './clientes/pages/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './clientes/pages/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/pages/editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './clientes/pages/detalle-cliente/detalle-cliente.component';
import { ClienteFormularioComponent } from './clientes/components/cliente-formulario/cliente-formulario.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoClientesComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent,
    ClienteFormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),

    //Esta es la configuracion por default que se agrega al anadir el @angular/fire
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}

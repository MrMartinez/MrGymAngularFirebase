import { Cliente } from 'src/app/shared/models/cliente.interface';
import { PreciosService } from './../../services/precios.service';
import { Router } from '@angular/router';
import { Precio } from './../../../shared/models/precio';
import { Component, DebugEventListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { kill } from 'process';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-precio-formulario',
  templateUrl: './precio-formulario.component.html',
  styleUrls: ['./precio-formulario.component.scss'],
})
export class PrecioFormularioComponent implements OnInit {
  precio!: Precio;
  precioForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private PrecioSvc: PreciosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (typeof navigation?.extras?.state !== 'undefined') {
      this.precio = navigation?.extras?.state!['value'];
    }
    this.iniForm();
  }

  ngOnInit(): void {
    if (typeof this.precio === 'undefined') {
      this.router.navigate(['precios/crear']);
    } else {
      this.precioForm.patchValue(this.precio);
    }
  }

  guardarCambios() {
    if (this.precioForm.valid) {
      const precio = this.precioForm.value;
      const precioId = this.precio?.id!;
      this.PrecioSvc.guardarCambios(precio, precioId!)
        .then((result) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Operacion exitosa!',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '!Algo salio mal!',
            text: 'Comuniquese con el Depto. de Tecnología',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      this.router.navigate(['/precios/listar']);
    }
  }

  irListadoPrecios() {
    this.router.navigate(['precios/listar']);
  }

  private iniForm() {
    this.precioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      tipoDuracion: ['', [Validators.required]],
    });
  }
  validarCampos(campo: string): string {
    const campoValidar = this.precioForm.get(campo);
    return !campoValidar?.valid && campoValidar?.touched
      ? 'is-invalid'
      : campoValidar?.touched
      ? 'is-valid'
      : '';
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../header/models/cliente.interface';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss'],
})
export class ClienteFormularioComponent implements OnInit {
  cliente!: Cliente;
  clienteForm!: FormGroup;
  private isEmail = '/S+@S+.S+/';
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();

    // debo validar si es nula o undefined para poder hacer esa llamda. porque me da error al cargar el formulario cuanod la traigo de nueva o de editar
    if (typeof navigation?.extras?.state !== 'undefined') {
      this.cliente = navigation?.extras?.state!['value'];
    }

    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.cliente === 'undefined') {
      this.router.navigate(['cliente/crear']);
    } else {
      this.clienteForm.patchValue(this.cliente);
    }
  }
  irInfoCliente() {
    this.router.navigate(['/cliente/listar']);
  }
  guardarCambios() {}

  private initForm() {
    this.clienteForm = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.pattern(this.isEmail)]],
      cedula: [''],
      telefono: [''],
      fechaNacimiento: ['', [Validators.required]],
      direccion: [''],
      imgUrl: [''],
    });
  }
}

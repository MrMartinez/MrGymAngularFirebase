import { Cliente } from './../../../shared/components/header/models/cliente.interface';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  template: `<app-cliente-formulario></app-cliente-formulario>`,
  //templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss'],
})
export class EditarClienteComponent implements OnInit {
  // cliente: Cliente;
  // clienteForm!: FormGroup;
  // private isEmail = '/S+@S+.S+/';
  constructor() {
    // const navigation = this.router.getCurrentNavigation();
    // this.cliente = navigation?.extras?.state!['value'];
    // this.initForm();
  }

  ngOnInit(): void {
    // if (typeof this.cliente === 'undefined') {
    //   this.router.navigate(['cliente/crear']);
    // } else {
    //   this.clienteForm.patchValue(this.cliente);
    // }
  }
  // irInfoCliente() {
  //   this.router.navigate(['/cliente/listar']);
  // }
  // guardarCambios() {}

  // private initForm() {
  //   this.clienteForm = this.fb.group({
  //     nombres: ['', [Validators.required]],
  //     apellidos: ['', [Validators.required]],
  //     email: ['', [Validators.pattern(this.isEmail)]],
  //     cedula: [''],
  //     telefono: [''],
  //     fechaNacimiento: ['', [Validators.required]],
  //     direccion: [''],
  //     imgUrl: [''],
  //   });
  // }
}

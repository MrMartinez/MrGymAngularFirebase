import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cliente',
  template: `<app-cliente-formulario></app-cliente-formulario>`,
  //templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss'],
})
export class EditarClienteComponent implements OnInit {
  // Se ha comenado todo el codigo porque se esta usando el template de ClienteFormulario. ver declaracion arriba

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

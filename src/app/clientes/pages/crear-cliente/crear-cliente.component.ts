import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cliente',
  template: `<app-cliente-formulario></app-cliente-formulario>`,
  styleUrls: ['./crear-cliente.component.scss'],
})
export class CrearClienteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

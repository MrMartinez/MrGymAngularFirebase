import { ClientesService } from '../../../clientes/services/clientes.service';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MaxLengthValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { Cliente } from 'src/app/shared/models/cliente.interface';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss'],
})
export class ClienteFormularioComponent implements OnInit {
  cliente!: Cliente;
  clienteForm!: FormGroup;
  // guardando: boolean = false;
  // subiendo!: boolean;
  // porcentajeImagenSubida: any;
  // urlImagen: string = '';
  private isEmail =
    '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private clienteSvs: ClientesService
  ) {
    const navigation = this.router.getCurrentNavigation();

    // debo validar si es nula o undefined para poder hacer esa llamda. porque me da error al cargar el formulario cuanod la traigo de nueva o de editar
    if (typeof navigation?.extras?.state !== 'undefined') {
      this.cliente = navigation?.extras?.state!['value'];
    }
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.cliente === 'undefined') {
      this.router.navigate(['clientes/crear']);
    } else {
      this.clienteForm.patchValue(this.cliente);
    }
  }
  irInfoCliente() {
    this.router.navigate(['/clientes/listar']);
  }
  guardarCambios() {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      const clienteId = this.cliente?.id || null;
      this.clienteSvs
        .guardarCambios(cliente, clienteId!)
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

      this.router.navigate(['/clientes/listar']);
    }
  }
  // subirImagen(event: any) {
  //   this.subiendo = true;
  //   //Obtengo el archivo que trae el evento
  //   const file = event.target.files[0];

  //   //Le quieto la extension al nombre, para luego agregarle la fecha y mas tarde la extension
  //   let fileName = file.name.split('.').slice(0, -1).join('.');

  //   //Agrego prefijo de tiempo asi no repito imagen
  //   let timeToName = new Date().getTime().toString();

  //   //Obtengo la extension del archvio
  //   let extensionFilename = file.name
  //     .toString()
  //     .substring(file.name.toString().lastIndexOf('.'));

  //   //Listo! la ruta completa: ruta + nombre de archivo + tiempo de la fecha (para evitar archivos repetidos) + extension

  //   const filePath = 'Clientes/' + fileName + timeToName + extensionFilename;

  //   const ref = this.storage.ref(filePath);
  //   const task = ref.put(file);

  //   //Obtengo la url de la imagen para asignarla a la variable declarada arriba y asi asignar al campo ImgUrl del formulario
  //   task.then((obj) => {
  //     ref.getDownloadURL().subscribe(url => {
  //       this.urlImagen = url;
  //     });
  //   });
  //   task.percentageChanges().subscribe((porcentaje) => {
  //     this.porcentajeImagenSubida = porcentaje;
  //   });
  // }

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

  validarCampos(campo: string): string {
    const campoValidar = this.clienteForm.get(campo);
    return !campoValidar?.valid && campoValidar?.touched
      ? 'is-invalid'
      : campoValidar?.touched
      ? 'is-valid'
      : '';
  }
}

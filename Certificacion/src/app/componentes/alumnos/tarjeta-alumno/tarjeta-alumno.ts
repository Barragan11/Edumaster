import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Alumno } from '../../../interfaces/alumno';
import { Auth } from '../../../servicios/auth';

@Component({
  selector: 'app-tarjeta-alumno',
  standalone: true,
  templateUrl: './tarjeta-alumno.html',
  styleUrl: './tarjeta-alumno.css'
})
export class TarjetaAlumno {

  auth = inject(Auth);
  @Input() alumno!: Alumno;

  @Output() eliminar = new EventEmitter<number>();

  eliminarAlumno() {
    this.eliminar.emit(this.alumno.id);
  }

}
import { Component, inject, OnInit } from '@angular/core';
import { AlumnoService } from '../../../servicios/alumno';
import { Alumno } from '../../../interfaces/alumno';
import { TarjetaAlumno } from '../tarjeta-alumno/tarjeta-alumno';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Auth } from '../../../servicios/auth';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [TarjetaAlumno, RouterLink, CommonModule ],
  templateUrl: './lista-alumnos.html',
  styleUrl: './lista-alumnos.css',
})
export class ListaAlumnos implements OnInit {
  private cd = inject(ChangeDetectorRef);
  auth = inject(Auth);
  private alumnoService = inject(AlumnoService);

  lista: Alumno[] = [];

  ngOnInit() {
    this.cargarAlumnos();
  }


  eliminarAlumno(id: number) {

    Swal.fire({
      title: '¿Seguro?',
      text: 'Se eliminará el alumno',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {

      if (result.isConfirmed) {

        this.alumnoService.deleteAlumno(id).subscribe(() => {

          Swal.fire('Eliminado', 'Alumno eliminado correctamente', 'success');

          this.cargarAlumnos(); // 🔥 refrescar desde BD

        });

      }

    });
  }

  cargarAlumnos() {
  this.alumnoService.getAlumnos().subscribe(data => {
    console.log('ALUMNOS:', data);

    this.lista = data;

    this.cd.detectChanges(); // 🔥 ESTA ES LA CLAVE
  });
}
}
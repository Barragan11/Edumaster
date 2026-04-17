import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Curso } from '../../../servicios/curso'; 
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Auth } from '../../../servicios/auth';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.css',
})
export class ListaCursos implements OnInit {
   auth = inject(Auth);
  private cd = inject(ChangeDetectorRef);
  private cursoService = inject(Curso); 

  cursos: any[] = [];



eliminarCurso(id: number) {

  Swal.fire({
    title: '¿Seguro?',
    text: 'Este curso se eliminará',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar'
  }).then((result) => {

    if (result.isConfirmed) {

      this.cursoService.deleteCurso(id).subscribe(() => {

        Swal.fire('Eliminado', 'Curso eliminado', 'success');

        // 🔥 RECARGAR DESDE BD
        this.cargarCursos();

      });

    }

  });
}
cargarCursos() {
  this.cursoService.getCursos().subscribe({
    next: (data) => {
      this.cursos = data;
      this.cd.detectChanges();
    },
    error: (err) => {
      console.error(err);
    }
  });
}

ngOnInit() {
  this.cargarCursos();
}
}
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AlumnoService } from '../../../servicios/alumno';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-alumno.html',
  styleUrl: './formulario-alumno.css'
})
export class FormularioAlumno {

  private fb = inject(FormBuilder);
  private alumnoService = inject(AlumnoService);
  private router = inject(Router);

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(10)]],
    matricula: ['', [Validators.required]],
    carrera: ['', [Validators.required]]
  });

  guardar() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();

      Swal.fire({
        title: 'Error',
        text: 'Completa todos los campos',
        icon: 'warning'
      });

      return;
    }

    this.alumnoService.createAlumno(this.form.value).subscribe(() => {

  Swal.fire('Éxito', 'Alumno registrado correctamente', 'success');

  // 🔥 FORZAR RECARGA
  this.router.navigateByUrl('/alumnos', { replaceUrl: true }).then(() => {
    window.location.reload();
  });

});
}

}
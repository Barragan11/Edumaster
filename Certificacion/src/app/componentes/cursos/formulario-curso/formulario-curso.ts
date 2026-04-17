import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Curso } from '../../../servicios/curso';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulario-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-curso.html',
  styleUrl: './formulario-curso.css'
})
export class FormularioCurso {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private cursoService = inject(Curso);
  private router = inject(Router);

  cursoOriginal: any;
  modoEdicion = false;
  id: number = 0;
  form = this.fb.group({
  nombre: ['', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)
  ]],

  descripcion: ['', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)
  ]],

  imagen: ['', [
    Validators.required,
    Validators.minLength(3)
  ]],

  descripcion_larga: ['', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(300)
  ]],

  duracion: ['', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50)
  ]],

  costo: ['', [
    Validators.required,
    Validators.min(0),
    Validators.max(10000)
  ]],

  nivel: ['', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)
  ]]
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

  if (this.modoEdicion) {

    const datos = {
      ...this.cursoOriginal,
      ...this.form.value
    };

    this.cursoService.updateCurso(this.id, datos).subscribe(() => {

      Swal.fire('Actualizado', 'Curso actualizado correctamente', 'success');
      this.router.navigate(['/cursos']);

    });

  } else {

    this.cursoService.createCurso(this.form.value).subscribe(() => {

      Swal.fire('Creado', 'Curso creado correctamente', 'success');
      this.router.navigate(['/cursos']);

    });

  }

}

ngOnInit() {

  this.route.paramMap.subscribe(params => {

    const idParam = params.get('id');

    if (idParam) {
      this.modoEdicion = true;
      this.id = Number(idParam);

      this.cursoService.getCursoById(this.id).subscribe(data => {
        this.cursoOriginal = data; 
      this.form.patchValue(data); 
      });
    }

  });

}
}
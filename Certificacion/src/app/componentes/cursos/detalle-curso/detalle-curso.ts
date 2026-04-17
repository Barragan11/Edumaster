import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Curso } from '../../../servicios/curso';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-curso.html',
  styleUrl: './detalle-curso.css'
})
export class DetalleCurso implements OnInit {
  private cd = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private cursoService = inject(Curso);

  curso: any;

  ngOnInit() {
  this.route.paramMap.subscribe(params => {

    const id = Number(params.get('id'));
    console.log('ID:', id); // 🔥

    this.cursoService.getCursoById(id).subscribe({
  next: (data) => {
    console.log('CURSO:', data);
    this.curso = data;

    this.cd.detectChanges(); // 🔥 CLAVE
  },
  error: (err) => {
    console.error('ERROR:', err);
    }
    });
  });
  }
}

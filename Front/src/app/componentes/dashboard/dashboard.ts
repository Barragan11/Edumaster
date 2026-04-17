import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlumnoService } from '../../servicios/alumno';
import { Curso } from '../../servicios/curso';
import { Auth } from '../../servicios/auth';
import { Tareas } from '../../servicios/tareas';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private router = inject(Router);
  private alumnoService = inject(AlumnoService);
  private cursoService = inject(Curso);
  private auth = inject(Auth);
  private tareasService = inject(Tareas);

  // 🔥 SIGNALS
  totalAlumnos = signal(0);
  totalCursos = signal(0);
  totalTareas = signal(0);

  usuario = this.auth.obtenerUsuario();

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {

    this.alumnoService.getAlumnos().subscribe(data => {
      this.totalAlumnos.set(data.length);
    });

    this.cursoService.getCursos().subscribe(data => {
      this.totalCursos.set(data.length);
    });

    this.tareasService.getTareas().subscribe(data => {
      this.totalTareas.set(data.length);
    });

    

  }

  cerrarSesion() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
import { Component, inject, OnInit } from '@angular/core';
import { Tareas } from '../../../servicios/tareas';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoPipe } from '../../../../app/pipes/estado.pipe';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
   imports: [CommonModule, EstadoPipe],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})
export class ListaTareas implements OnInit, AfterViewInit  {
private route = inject(ActivatedRoute);
private router = inject(Router);
  private cd = inject(ChangeDetectorRef);
  private tareasService = inject(Tareas);

  tareas: any[] = [];

  ngOnInit() {
  this.route.queryParamMap.subscribe(params => {

    const estado = params.get('estado');

    this.cargarTareas(estado);

  });
}

ngAfterViewInit() {
  setTimeout(() => {
    console.log('Tareas listas en pantalla');
  }, 500);
}

  cargarTareas(estado?: string | null) {

  this.tareasService.getTareas().subscribe(data => {

    if (estado) {
      this.tareas = data.filter(t => t.estado === estado);
    } else {
      this.tareas = data;
    }

  });
}

  cambiarEstado(tarea: any) {

    const nuevoEstado =
      tarea.estado === 'pendiente' ? 'completada' : 'pendiente';

    this.tareasService
      .cambiarEstado(tarea.id, nuevoEstado)
      .subscribe(() => {

        tarea.estado = nuevoEstado; // UI inmediata

      });
  }

  filtrar(estado: string) {
  this.router.navigate(['/tareas'], {
    queryParams: { estado }
  });
}

mostrarTodas() {
  this.router.navigate(['/tareas']);
}

}
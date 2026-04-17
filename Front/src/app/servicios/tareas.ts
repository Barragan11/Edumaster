import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tareas {

  private http = inject(HttpClient);

  getTareas() {
    return this.http.get<any[]>('http://localhost:3000/api/tareas');
  }

  cambiarEstado(id: number, estado: string) {
    return this.http.put(
      `http://localhost:3000/api/tareas/${id}`,
      { estado }
    );
  }

}
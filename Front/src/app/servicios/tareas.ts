import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tareas {

  private http = inject(HttpClient);

  getTareas() {
    return this.http.get<any[]>('https://edumaster-back.onrender.com/api/tareas');
  }

  cambiarEstado(id: number, estado: string) {
    return this.http.put(
      `https://edumaster-back.onrender.com/api/tareas/${id}`,
      { estado }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private http = inject(HttpClient);

  getAlumnos() {
    return this.http.get<Alumno[]>('http://localhost:3000/api/alumnos');
  }

  deleteAlumno(id: number) {
    return this.http.delete(`http://localhost:3000/api/alumnos/${id}`);
  }

  createAlumno(alumno: any) {
  return this.http.post('http://localhost:3000/api/alumnos', alumno);
}

}
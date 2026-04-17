import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private http = inject(HttpClient);

  getAlumnos() {
    return this.http.get<Alumno[]>('https://edumaster-back.onrender.com/api/alumnos');
  }

  deleteAlumno(id: number) {
    return this.http.delete(`https://edumaster-back.onrender.com/api/alumnos/${id}`);
  }

  createAlumno(alumno: any) {
  return this.http.post('https://edumaster-back.onrender.com/api/alumnos', alumno);
}

}

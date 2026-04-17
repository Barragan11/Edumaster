import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Curso {

  private url = 'http://localhost:3000/api/cursos';

  constructor(private http: HttpClient) {}

  getCursos() {
    return this.http.get<any[]>(this.url);
  }

  createCurso(curso: any) {
  return this.http.post('http://localhost:3000/api/cursos', curso);
}

deleteCurso(id: number) {
  return this.http.delete(`http://localhost:3000/api/cursos/${id}`);
}

updateCurso(id: number, curso: any) {
  return this.http.put(`http://localhost:3000/api/cursos/${id}`, curso);
}

getCursoById(id: number) {
  return this.http.get<any>(`http://localhost:3000/api/cursos/${id}`);
}
}
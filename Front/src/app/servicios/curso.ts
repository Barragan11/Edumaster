import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Curso {

  private url = 'https://edumaster-back.onrender.com/api/cursos';

  constructor(private http: HttpClient) {}

  getCursos() {
    return this.http.get<any[]>(this.url);
  }

  createCurso(curso: any) {
  return this.http.post('https://edumaster-back.onrender.com/api/cursos', curso);
}

deleteCurso(id: number) {
  return this.http.delete(`https://edumaster-back.onrender.com/api/cursos/${id}`);
}

updateCurso(id: number, curso: any) {
  return this.http.put(`https://edumaster-back.onrender.com/api/cursos/${id}`, curso);
}

getCursoById(id: number) {
  return this.http.get<any>(`https://edumaster-back.onrender.com/api/cursos/${id}`);
}
}

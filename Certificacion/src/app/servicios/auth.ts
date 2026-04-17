import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private http = inject(HttpClient);

  // 🔥 SIGNAL GLOBAL
  usuarioSignal = signal<any>(this.obtenerUsuario());

  login(data: any) {
    return this.http.post<any>('http://localhost:3000/api/auth/login', data);
  }

  registro(data: any) {
    return this.http.post<any>('http://localhost:3000/api/auth/registro', data);
  }

  guardarUsuario(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // 🔥 ACTUALIZA AUTOMÁTICAMENTE
    this.usuarioSignal.set(usuario);
  }

  obtenerUsuario() {
    return JSON.parse(localStorage.getItem('usuario') || 'null');
  }

  logout() {
    localStorage.removeItem('usuario');

    // 🔥 ACTUALIZA AUTOMÁTICAMENTE
    this.usuarioSignal.set(null);
  }

  esAdmin(): boolean {
    return this.usuarioSignal()?.rol === 'admin';
  }

}
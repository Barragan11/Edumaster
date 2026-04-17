import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../servicios/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  modo: 'login' | 'registro' = 'login';

  usuario = '';
  password = '';
  confirmPassword = '';

  private authService = inject(Auth);
  private router = inject(Router);

  // ================= LOGIN =================
  iniciarSesion() {

    if (!this.usuario || !this.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Completa todos los campos'
      });
      return;
    }

    const datos = {
      usuario: this.usuario,
      password: this.password
    };

    this.authService.login(datos).subscribe({
      next: (res) => {

        const user = res.usuario || res.user || res; // 🔥 SOLUCIÓN UNIVERSAL

        this.authService.guardarUsuario(user);

        console.log('USUARIO LOGUEADO:', user);

        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: user.usuario
        });

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cursos']);
        }); 
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos'
        });
      }
    });
  }

  // ================= REGISTRO =================
  registrar() {

    if (!this.usuario || !this.password || !this.confirmPassword) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Completa todos los campos'
      });
      return;
    }

    // 🔥 VALIDAR CONTRASEÑAS
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden'
      });
      return;
    }

    const datos = {
      usuario: this.usuario,
      password: this.password,
      rol: 'usuario' // 🔥 por defecto
    };

    this.authService.registro(datos).subscribe({
      next: () => {

        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: 'Ahora puedes iniciar sesión'
        });

        // limpiar campos
        this.usuario = '';
        this.password = '';
        this.confirmPassword = '';

        this.modo = 'login';
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo registrar'
        });
      }
    });
  }

}
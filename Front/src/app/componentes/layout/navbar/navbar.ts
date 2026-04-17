import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Auth } from '../../../servicios/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  authService = inject(Auth);
  router = inject(Router);

  // 🔥 SIGNAL DIRECTO
  usuario = this.authService.usuarioSignal;

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
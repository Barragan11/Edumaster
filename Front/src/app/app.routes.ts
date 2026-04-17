import { Routes } from '@angular/router';

import { Login } from './componentes/login/login';
import { Dashboard } from './componentes/dashboard/dashboard';
import { ListaAlumnos } from './componentes/alumnos/lista-alumnos/lista-alumnos';
import { FormularioAlumno } from './componentes/alumnos/formulario-alumno/formulario-alumno';
import { DetalleAlumno } from './componentes/alumnos/detalle-alumno/detalle-alumno';
import { ListaCursos } from './componentes/cursos/lista-cursos/lista-cursos';
import { DetalleCurso } from './componentes/cursos/detalle-curso/detalle-curso';
import { ListaTareas } from './componentes/tareas/lista-tareas/lista-tareas';
import { NotFound} from './componentes/not-found/not-found';
import { Home } from './componentes/home/home';
import { FormularioCurso } from './componentes/cursos/formulario-curso/formulario-curso';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },

  { path: 'alumnos', component: ListaAlumnos },
  { path: 'alumnos/nuevo', component: FormularioAlumno },
  { path: 'alumnos/:id', component: DetalleAlumno },

  { path: 'cursos', component: ListaCursos },
  { path: 'cursos/nuevo', component: FormularioCurso },
  { path: 'cursos/:id', component: DetalleCurso },
  { path: 'cursos/editar/:id', component: FormularioCurso },

  { path: 'tareas', component: ListaTareas },

  { path: '**', component: NotFound }
  
];

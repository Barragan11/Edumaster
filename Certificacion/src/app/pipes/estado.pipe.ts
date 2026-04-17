import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoTexto',
  standalone: true
})
export class EstadoPipe implements PipeTransform {

  transform(valor: string): string {

    if (valor === 'completada') {
      return '✔ Completada';
    }

    if (valor === 'pendiente') {
      return '⏳ Pendiente';
    }

    return valor;
  }

}
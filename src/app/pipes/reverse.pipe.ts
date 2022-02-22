import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    // Split para dividir y convertir en array el string
    // reverse para invertir el string
    // join para volver a convertir el array en string
    return value.split('').reverse().join('');
    
  }

}

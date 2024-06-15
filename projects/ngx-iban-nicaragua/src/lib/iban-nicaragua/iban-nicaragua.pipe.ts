import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ibanNicaragua'
})
export class IbanNicaraguaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

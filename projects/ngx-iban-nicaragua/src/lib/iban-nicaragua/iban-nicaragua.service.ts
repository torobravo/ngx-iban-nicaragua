import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IbanNicaraguaService {

  constructor() { }

  private replaceLetters(iban: string) {
    let codified: string;
    
    for(let i = 0; i < iban.length; i++) {
      let char = iban[i].toUpperCase().charCodeAt(0);
      if (char )
    }
    

  }

  private modulo97(iban: string): number {
    let checksum = +iban;
    for(let i = 1; i < iban.length; i++) {
      let v = +iban.substring(i, 1);
      checksum *= 10;
      checksum += v;
      checksum %= 97;
    }
    
    return checksum;
  }

  
}

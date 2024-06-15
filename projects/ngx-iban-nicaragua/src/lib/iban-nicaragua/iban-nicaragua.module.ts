import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbanNicaraguaDirective } from './iban-nicaragua.directive';
import { IbanNicaraguaPipe } from './iban-nicaragua.pipe';

@NgModule({
  declarations: [IbanNicaraguaDirective, IbanNicaraguaPipe],
  imports: [CommonModule],
  exports: [IbanNicaraguaDirective, IbanNicaraguaPipe],
})
export class IbanNicaraguaModule {}

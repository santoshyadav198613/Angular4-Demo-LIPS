import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null && control.value !== undefined) {
      if (control.value > 5 || control.value < 3) {
        return { passwordValid: false }
      }
      return null;
    }
    return null;
  }

}

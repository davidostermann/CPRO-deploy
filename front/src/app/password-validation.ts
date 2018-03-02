import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static matchPassword(AC: AbstractControl) {
    const { password, confirmPassword } = AC.value;
    console.log(`AC.value = ${JSON.stringify(AC.value)}`);

    if (password !== confirmPassword) {

      AC.get('confirmPassword').setErrors({ matchPassword: true });
      console.log('ERRRORS : ', AC.get('confirmPassword').errors);
    }
  }
}

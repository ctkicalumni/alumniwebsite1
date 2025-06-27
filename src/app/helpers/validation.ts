import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl.errors && !checkControl.errors.matching) {
        return null;
      }
      if (control.value !== checkControl.value) {
        controls.get(checkControlName).setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  // static leavingYear(leaveYearControl: string, dobControl: string): ValidatorFn {
  //   return (controls: AbstractControl) => {
  //     const control = controls.get(leaveYearControl);
  //     const checkControl = controls.get(dobControl);
  //     let dobYear = checkControl.value.getFullYear();
  //     let diff = dobYear - control.value;
  //     if (checkControl.errors && !checkControl.errors.leaveyear) {
  //       return null;
  //     }
  //     if (diff <= 3) {
  //       control.setErrors({ leaveyear: true });
  //       return { leaveyear: true };
  //     } else {
  //       return null;
  //     }
  //   };
  // }
}

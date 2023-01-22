import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import Validation from './validation';
@Directive({
  selector: '[mustMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordmatachDirective,
      multi: true,
    },
  ],
})

export class PasswordmatachDirective {
  @Input('mustMatch') matchPassword: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors | null {
    return Validation.match(
      this.matchPassword[0],
      this.matchPassword[1]
    )(formGroup);
  }
}




// import { Directive, Input } from '@angular/core';
// import {
//   FormGroup,
//   NG_VALIDATORS,
//   ValidationErrors,
//   Validator,
// } from '@angular/forms';

//  import Validation from './validation';

// @Directive({
//   selector: '[mustMatch]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: MatchPasswordDirective,
//       multi: true,
//     },
//   ],
// })
// export class MatchPasswordDirective implements Validator {
//   @Input('mustMatch') matchPassword: string[] = [];

//   validate(formGroup: FormGroup): ValidationErrors | null {
//     return Validation.match(
//       this.matchPassword[0],
//       this.matchPassword[1]
//     )(formGroup);
//   }
// }


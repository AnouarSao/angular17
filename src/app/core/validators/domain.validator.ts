import { AbstractControl, ValidatorFn } from "@angular/forms";

export function domainValidator (domainName: string): ValidatorFn{
  return function (control: AbstractControl<string>): {domain: string} | null{
    return control.value.endsWith(domainName) ? {domain: domainName} : null
  }
}

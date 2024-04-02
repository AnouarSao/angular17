import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'autocomplete',
    standalone: true
})
export class AutoCompletePipe implements PipeTransform {
    transform(names: string[], str: string): string[] {
        /*return names.filter(function(name) {
            return name.startsWith(str)
        })*/
        return names.filter(name => name.startsWith(str))
    }
}
import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../../core/interfaces/user.interface";

@Pipe({
    name: 'extFilter',
    standalone: true
})
export class ExtensionPipe implements PipeTransform {
    transform(users: User[], ext: string): User[] {
        if (!ext) {
            return users
        }
        return users.filter(user => user.email.endsWith(ext))
    }
}
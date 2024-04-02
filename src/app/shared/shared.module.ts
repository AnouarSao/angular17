import { NgModule } from "@angular/core";
import { ConfirmDirective } from "./directives/confirm.directive";
import { AutoCompletePipe } from "./pipes/autocomplete.pipe";
import { ExtensionPipe } from "./pipes/extension.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { PluralPipe } from "./pipes/plural.pipe";

const imports = [PluralPipe, LangPipe, ExtensionPipe, AutoCompletePipe, ConfirmDirective]

@NgModule({
    imports, // équivalent à imports: imports
    exports: imports
})
export class SharedModule {}

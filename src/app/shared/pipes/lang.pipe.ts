import { Pipe, PipeTransform } from "@angular/core";

type LangDict = {
    [wordId: string]: {
        [locale: string]: string
    }
}

const WORDS: LangDict = {
    REMOVE: {
        fr: 'Supprimer',
        en: 'Delete'
    }
}

@Pipe({
    name: 'lang',
    standalone: true
})
export class LangPipe implements PipeTransform {
    transform(wordId: string, locale: string): string {
        return WORDS[wordId][locale]
    }
}
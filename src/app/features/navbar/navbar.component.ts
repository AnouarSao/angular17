import { CurrencyPipe, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }} - {{ price | currency:'EUR':'code' }}</h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
        <button routerLink="/login">Connexion</button>
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, CurrencyPipe, RouterLink]
})
export class NavbarComponent {
    title = 'Mon Appli Angular 😋'
    name = 'sao'
    price = 15000

    listenSearch(userName: string) {
        console.log(userName)
    }
}

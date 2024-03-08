import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContatosListagemComponent } from "./contatos-listagem/contatos-listagem.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ContatosListagemComponent]
})
export class AppComponent {
  title = 'angular-hello-world';
}

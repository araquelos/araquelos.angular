import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  standalone: true,
  imports: [],
  templateUrl: './contatos-listagem.component.html',
  styleUrl: './contatos-listagem.component.css'
})

export class ContatosListagemComponent {

  contatos = [
    { id: 1, nome: 'Alexandre', email: 'alexandre@email.com'},
    { id: 2, nome: 'Thiago', email: 'thiago@email.com'},
  ];
  
  constructor() {}

  ngOnInit() {
    
  }

}

import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent {

  cliente: Cliente;
  nome: String = 'Fulano';

  constructor() {
    this.cliente = new Cliente();
    this.cliente.nome = "Raquel";
  }

  ngOnInit(): void {

  }

  clicar() {
    console.log('Cliquei!')
  }
}

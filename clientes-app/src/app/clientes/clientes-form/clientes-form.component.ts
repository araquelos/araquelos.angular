import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent {

  cliente!: Cliente;
}

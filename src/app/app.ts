import { Component, signal } from '@angular/core';
import { ListaCompras } from './lista-compras/lista-compras';

@Component({
  imports: [ ListaCompras ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('listaCompras');
}

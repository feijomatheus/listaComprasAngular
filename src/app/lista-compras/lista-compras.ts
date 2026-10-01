import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { itemLista } from './itemlista'
import { CommonModule } from '@angular/common';
import { not } from 'rxjs/internal/util/not';

@Component({
  imports: [ FormsModule, CommonModule ],
  selector: 'app-lista-compras',
  styleUrl: './lista-compras.scss',
  templateUrl: './lista-compras.html',
})
export class ListaCompras {

  item: string = '';
  lista: itemLista[] = [];

  adicionarItem(){
    let itemlista = new itemLista();
    itemlista.nome = this.item;
    itemlista.id = this.lista.length + 1;

    this.lista.push(itemlista);

    this.item = '';
  }

  riscarItem(itemLista: itemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  LimparLista(){
    this.lista = [];
  }

}

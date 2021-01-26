import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  preserveWhitespaces: true
})
export class ClienteComponent implements OnInit {

  produtos: Produto[];

  constructor(private service: ProdutosService) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.produtos = dados);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Produto } from './produto';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API='';

  constructor( private http: HttpClient) { }

  list (){
    return this.http.get<Produto[]>(this.API);
  }

}

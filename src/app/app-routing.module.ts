import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { GerenteComponent } from './gerente/gerente.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent},
  { path: 'funcionario', component: FuncionarioComponent},
  { path: 'gerente', component: GerenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClienteComponent, FuncionarioComponent, GerenteComponent]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '', pathMatch: 'full', redirectTo: 'login'
},
{
  path: 'clientes',
  loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule)
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
},
{
  path: 'produtos',
  loadChildren: () => import('./pages/produtos/produtos.module').then(m => m.ProdutosModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

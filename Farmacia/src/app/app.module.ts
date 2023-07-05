import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutosComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

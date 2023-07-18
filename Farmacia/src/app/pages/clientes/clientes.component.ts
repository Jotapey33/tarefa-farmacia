import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  // class do form
  email = new FormControl('', [Validators.required, Validators.email]);

  // class do table
  displayedColumns: string[] = ['posicao', 'nome', 'cpf', 'nascimento', 'sexo', 'pcd', 'endereco', 'telefone', 'email'];
  dataSource = new MatTableDataSource<CadastroCliente>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface CadastroCliente {
  nome: string;
  posicao: number;
  cpf: number;
  nascimento: string;
  sexo: string;
  pcd: string;
  endereco: string;
  telefone: number;
  email: string;
}
  const ELEMENT_DATA: CadastroCliente[] = [
    {posicao: 1, nome: 'João Pedro', cpf: 14203546630, nascimento: '07/06/1997', sexo: 'masculino', pcd: 'sim', endereco: 'R. Prefeito Antonio Candido 551', telefone: 38991682950, email: 'jpsouzafiuza@gmail.com',},
    {posicao: 2, nome: 'Meire Alves', cpf: 73359513649, nascimento: '09/07/1964', sexo: 'feminino', pcd: 'não', endereco: 'R. Prefeito Antonio Candido 551', telefone: 38998674539, email: 'Meireaves@hotmail.com',},
    {posicao: 3, nome: 'Vitor Filer', cpf: 16534756910, nascimento: '11/07/2001', sexo: 'masculino', pcd: 'sim', endereco: 'R. Alguma de Floripa 24', telefone: 3837422734, email: 'evitorfiler@gmail.com',},
    {posicao: 4, nome: 'Junio Souza', cpf: 23498567824, nascimento: '02/07/1995', sexo: 'indefinido', pcd: 'não', endereco: 'R. Antonio José dos Santos 26', telefone: 38998674539, email: 'ejuniosouza@hotmail.com',},
    {posicao: 5, nome: 'Evaldo Lino', cpf: 82457829034, nascimento: '11/09/1967', sexo: 'masculino', pcd: 'não', endereco: 'R. Prefeito Antonio Candido 551', telefone: 38998295969, email: 'evaldofiuza@gmail.com',},
    {posicao: 6, nome: 'chup-chup', cpf: 15829568345, nascimento: '21/10/2010', sexo: 'feminino', pcd: 'não', endereco: 'R. Antonio José dos Santos 26', telefone: 38981562345, email: 'gurmetdalary@live.com',},
    {posicao: 7, nome: 'pitfall', cpf: 18976545223, nascimento: '09/02/2001', sexo: 'masculino', pcd: 'não', endereco: 'R. Clovis Dinis 1200', telefone: 3837422950, email: 'pitfallxd@yahoo.com',},
    {posicao: 8, nome: 'Maria Iasmine', cpf: 26645735412, nascimento: '11/03/1993', sexo: 'feminino', pcd: 'não', endereco: 'Av. Mons. Eduardo 1213', telefone: 34991425819, email: 'mine.ia@hotmail.com',},

  ];

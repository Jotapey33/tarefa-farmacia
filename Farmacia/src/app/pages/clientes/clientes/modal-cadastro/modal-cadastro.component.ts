import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss']
})
export class ModalCadastroComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void{}
}

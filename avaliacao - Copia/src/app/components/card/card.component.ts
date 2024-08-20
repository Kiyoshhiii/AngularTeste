import { Component, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  user = {
    name: '',
    cpf: '',
    nasc: ''
  };

  arr = new Array();

  @Output() newList: EventEmitter<any> = new EventEmitter();

  submit() {
    if (!this.isValidCPF(this.user.cpf)) {
      alert("CPF inválido!");
      return;
    }

    if (this.user.name == "") {
      alert("Nome vazio!");
      return;
    }

    if (this.user.nasc == "") {
      alert("Data de Nascimento vazio!");
      return;
    }

    let date = this.user.nasc.split("-");
    
    

    let obj = {
      name: this.user.name,
      cpf: this.user.cpf,
      nasc: date[2] + "/" + date[1] + "/" + date[0],
    }
    this.arr.push(obj);

    this.user.name = "";
    this.user.cpf = "";
    this.user.nasc = "";

    this.newList.emit(this.arr);
  }

  isValidCPF(cpf: string): boolean {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: 'clientes.page.html',
  styleUrls: ['clientes.page.scss'],
})
export class ClientesPage {

  clientes = [
    {
      "nome": "Pablo",
      "CNPJ": 152223230,
      "totalFaturado": 1221
    },
    {
      "nome": "sdfsd",
      "CNPJ": 152323230,
      "totalFaturado": 12232
    },
    {
      "nome": "sdfsdf",
      "CNPJ": 123232350,
      "totalFaturado": 122
    }
  ]

  constructor(  ) {}
 

}

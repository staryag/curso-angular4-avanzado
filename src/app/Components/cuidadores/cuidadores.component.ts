import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.component.html',
  styleUrls: ['./cuidadores.component.css']
})
export class CuidadoresComponent implements OnInit {
  public titulo = 'Cuidadores';

  constructor() { }

  ngOnInit() {
    console.log('Componente cuidadores cargado con éxito.');
  }

}

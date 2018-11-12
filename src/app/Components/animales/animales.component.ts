import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  public titulo = 'Animales';

  constructor() { }

  ngOnInit() {
    console.log('Componente animales cargado con éxito.');
  }

}

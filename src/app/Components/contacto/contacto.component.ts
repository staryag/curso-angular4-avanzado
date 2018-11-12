import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public titulo = 'Contacto';
  emailContacto: string;

  constructor() { }

  ngOnInit() {
    console.log('Componente contacto cargado con éxito.');
  }

  // Guardamos el email en el localstorage -> localStorage.setItem
  // Recogemos el email en el localstorage -> localStorage.getItem
  // Lo que guardemos en el localstorage es accesible desde cualquier parte de la web por cualquier componente
  guardarEmail() {
    console.log('email: ' + this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}

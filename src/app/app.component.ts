import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'curso-angular4-avanzado';
  email: string;

    // Como el ngDoCheck se lanza cada vez que hay un cambio, se encargará de actualizar el
  // valor de la variable cada vez que cambie en el localStorage
  ngDoCheck() {
    this.email = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    // localStorage.clear(); sirve para vaciar todo el localStorage
    this.email = null;
  }
}

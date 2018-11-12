import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css']
})
export class ParqueComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() nombre: string;
  @Input() metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = false;
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('1. ngOnChanges: Se ejecuta el primero de todos y también cada vez que ocurre un cambio en el componente.');
    console.log(changes);
    console.log('Nombre anterior: ' + changes.nombre.previousValue);
    console.log('Nombre nuevo: ' + changes.nombre.currentValue);
  }

  ngOnInit() {
    console.log('2. ngOnInit: Se ejecuta cuando se carga el componente por primera vez (solo una vez)');
  }

  ngDoCheck() {
    console.log('3. ngDoCheck: Se ejecuta cada vez que hay un cambio del tipo que sea dentro de la aplicación');
  }

  ngOnDestroy() {
    console.log('4. ngOnDestroy: Se ejecuta cuando se destruye el componente');
  }

   emitirEvento() {
    this.pasameLosDatos.emit({
      'nombre' : this.nombre,
      'metros' : this.metros,
      'vegetacion' : this.vegetacion,
      'abierto' : this.abierto
    });
   }


}

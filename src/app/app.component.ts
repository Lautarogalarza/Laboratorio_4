import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  //public ejemplo = "Hola Mundo";
  //public ejemplo2 = "Hola Mundo";

  public primeraEdad:number=0; 
  public segundaEdad:number=0;
  public promedio:number=0;
  public edadTotal:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  /*PruebaClick(){

    this.ejemplo2 = "Ejecutamos el evento"
  }*/

  Ejercicio1(){
    this.edadTotal = this.primeraEdad + this.segundaEdad;
    this.promedio = this.edadTotal/2; 
  }

  Limpiar(){
  
     this.primeraEdad = null;
     this.segundaEdad = null;
     this.edadTotal = 0;
     this.promedio = 0;
   
  }

}

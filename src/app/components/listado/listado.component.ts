import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listadoPaises=[];
  @Output() emitVerPais:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  verUsuario(user)
  {
    this.emitVerPais.emit(user)
  }

}

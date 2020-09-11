import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListadoService } from "../../servicios/listado.service";

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listado = [];
  usuarioSeleccionado;
  constructor(private listadoService: ListadoService) { }

  ngOnInit(): void {

    this.listadoService.getUsers().subscribe((listado: any) => {
      console.log(listado);
      console.log('console log dentro del observable');
      this.listado = listado;
    }, error => {
      console.log('Error');
    });

  }

  userSeleccionado(user){
    console.log(user);
    this.usuarioSeleccionado=user
    ;
  }

}

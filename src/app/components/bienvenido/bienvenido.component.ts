import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../servicios/usuario.service";

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
 
  constructor(private userService:UsuarioService) { }
  usuario = this.userService.usuario.nombre;

  ngOnInit(): void {
  }

}

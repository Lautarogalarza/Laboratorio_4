import { Component, OnInit } from '@angular/core';
import { Usuario } from "src/app/clases/usuario";
import { Router } from '@angular/router';
import { UsuarioService } from "../../servicios/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  constructor(private route:Router,private userService:UsuarioService) { }

  ngOnInit(): void {
  
  }

  Login(){

    if (this.usuario.nombre=="User@User" && this.usuario.clave=="Admin") {
      this.userService.usuario= this.usuario;
      this.route.navigate(['/bienvenido'])
 
    }
    else{
      this.route.navigate(['/error']);
    }
  }


}

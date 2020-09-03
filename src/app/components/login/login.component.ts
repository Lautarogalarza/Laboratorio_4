import { Component, OnInit } from '@angular/core';
import { Usuario } from "src/app/clases/usuario";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  constructor(private route:Router) { }

  ngOnInit(): void {
  
  }

  Login(){

    if (this.usuario.nombre=="Lautaro_9" && this.usuario.clave=="Lauti112") {

      this.route.navigate(['/bienvenido'])
      
    }
    else{
      this.route.navigate(['/error']);
    }
  }


}

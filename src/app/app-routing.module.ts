import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { BienvenidoComponent } from "./components/bienvenido/bienvenido.component";
import { LoginComponent } from "./components/login/login.component";
import { ErrorComponent } from "./components/error/error.component";
import { CalcularComponent } from "./components/calcular/calcular.component";

const routes: Routes =[
{path:'',component:LoginComponent},
{path:'bienvenido',component:BienvenidoComponent},
{path:'error',component:ErrorComponent},
{path:'calcular',component:CalcularComponent},

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

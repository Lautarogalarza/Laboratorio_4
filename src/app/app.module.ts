import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { AppRoutingModule } from './app-routing.module';
import { CalcularComponent } from './components/calcular/calcular.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent,
    CalcularComponent,
    ControlEntidadComponent,
    ListadoComponent,
    DetalleEntidadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

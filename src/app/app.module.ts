import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CitasComponent } from './components/citas/citas.component';
import { CasasComponent } from './components/casas/casas.component';
import { ComprasComponent } from './components/compras/compras.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    VendedorComponent,
    AdministradorComponent,
    PrincipalComponent,
    CitasComponent,
    CasasComponent,
    ComprasComponent,
    CarruselComponent,
    NosotrosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

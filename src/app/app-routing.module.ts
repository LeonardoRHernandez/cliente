import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: "",
    redirectTo: "/principal",pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    path: 'usuario',
    component: UsuarioComponent,
  },{
    path: 'vendedor',
    component: VendedorComponent,
  },{
    path: 'administrador',
    component: AdministradorComponent,
  },{
    path: 'principal',
    component: PrincipalComponent,
  },{
    path: 'citas',
    component: CitasComponent,
  },{
    path: 'casas',
    component: CasasComponent,
  },{
    path: 'compras',
    component: ComprasComponent,
  },{
    path: 'carrusel',
    component: CarruselComponent,
  },{
    path: 'nosotros',
    component: NosotrosComponent,
  },{
    path: 'todo',
    component: TodoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

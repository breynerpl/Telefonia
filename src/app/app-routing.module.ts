import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { PrincipalComponent } from './modulos/principal.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { ValidaruserGuard } from './guards/validaruser.guard';
import { ProductosComponent } from './modulos/productos/productos.component';
import { VentasComponent } from './modulos/ventas/ventas.component';
import { BodegaComponent } from './modulos/bodega/bodega.component';
import { ComprasComponent } from './modulos/compras/compras.component';

const routes: Routes = [{
path:'', component: PrincipalComponent,
canActivate: [ValidaruserGuard],
children: [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'bodega', component: BodegaComponent},
  {path: 'compras', component: ComprasComponent},
  {path: '', redirectTo:'/dashboard', pathMatch:'full'}
 ] 
},
{ path: 'login', component: LoginComponent},
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

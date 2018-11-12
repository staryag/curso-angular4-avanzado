import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { TiendaComponent } from './Components/tienda/tienda.component';
import { HomeComponent } from './Components/home/home.component';
import { CuidadoresComponent } from './Components/cuidadores/cuidadores.component';
import { AnimalesComponent } from './Components/animales/animales.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cuidadores', component: CuidadoresComponent},
  {path: 'animales', component: AnimalesComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent} // cuando la ruta falle o intentemos cargar una página que no existe
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

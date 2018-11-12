import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { ParqueComponent } from './Components/parque/parque.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AnimalesComponent } from './Components/animales/animales.component';
import { CuidadoresComponent } from './Components/cuidadores/cuidadores.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParqueComponent,
    HomeComponent,
    ContactoComponent,
    AnimalesComponent,
    CuidadoresComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAlquilerComponent } from './components/pages/registrar-alquiler/registrar-alquiler.component';
import { CatalogoInicioComponent } from './components/pages/catalogo/catalogo-inicio/catalogo-inicio.component';
import { CatalogoComponent } from './components/pages/catalogo/catalogo.component';

const routes: Routes = [
	{path: 'registrar-alquiler', component: RegistrarAlquilerComponent},
  {path: 'catalogo', component: CatalogoInicioComponent},
  {path: 'catalogo#sec2', component: CatalogoInicioComponent},
  {path: 'catalogo/:categoria', component: CatalogoComponent},
	{path: '**', pathMatch:'full', redirectTo:'registrar-alquiler'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

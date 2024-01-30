import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
      path: 'home',
      loadChildren: () =>
          import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
      path: 'listado-proveedores',
      loadChildren: () =>
          import('./components/listado-proveedores/listado-proveedores.module').then((m) => m.ListadoProveedoresModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

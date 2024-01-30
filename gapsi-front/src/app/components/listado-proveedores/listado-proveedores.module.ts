import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { ListadoProveedoresComponent } from "./listado-proveedores.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

const routes: Routes = [
    {
        path: 'listado-proveedores',
        component: ListadoProveedoresComponent
    },
];

@NgModule({
  declarations: [
    ListadoProveedoresComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ListadoProveedoresModule {}
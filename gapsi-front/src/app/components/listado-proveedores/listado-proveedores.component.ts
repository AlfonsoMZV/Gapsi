import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Apollo } from "apollo-angular";
import { Subscription } from 'rxjs';
import { Proveedores } from "src/app/interface/proveedores.interface";
import { ELIMINA_PROVEEDOR, OBTIENE_PROVEEDORES } from "src/app/graphql/queries.graphql";

@Component({
    selector: 'listado-proveedores',
    templateUrl: './listado-proveedores.component.html',
    styleUrls: ['./listado-proveedores.component.scss']
})
export class ListadoProveedoresComponent {
    public displayedColumnsDef: string[] = [
      'estatus', 'nombre', 'fechaAlta', 'disponible', 
      'descripcion', 'precio', 'options'
  ];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  lista: Proveedores[]= [];
  loading!: boolean;
  proveedores: any;
  querySubscription!: Subscription;

  constructor(
    private apollo: Apollo
  ) { }
  
  obtieneProveedores() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: OBTIENE_PROVEEDORES,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.dataSource = new MatTableDataSource(data.obtieneProveedores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  eliminaProveedor(id: any) {
    this.querySubscription = this.apollo
      .mutate({
        mutation: ELIMINA_PROVEEDOR,
        variables: {
          postId: id,
        },
      }).subscribe(
        ({ data }) => {
          console.log('Eliminado: ', data);
        },
        error => {
          console.log(error);
        },
      );
  }
}
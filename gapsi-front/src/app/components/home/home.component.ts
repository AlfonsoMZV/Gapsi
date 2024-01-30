import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent {
    ngOnInit(){}

    constructor(
        private router: Router
    ){

    }
    entraListado(){
        void this.router.navigate(['listado-proveedores/listado-proveedores'])
    }
  }
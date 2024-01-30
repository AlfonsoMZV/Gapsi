export interface Proveedores{
	id: number;
    estatus: string;
    nombre: string;
    fechaAlta: string;
    disponible: boolean;
    descripcion: string;
	precio: number;    
}

export interface GraphqlOptions {
    operationName: string;
    query: string;
    variables?: { [key: string]: any};
}
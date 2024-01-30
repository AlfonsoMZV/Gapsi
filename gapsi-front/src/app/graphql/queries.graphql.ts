import gql from "graphql-tag";

const OBTIENE_PROVEEDORES = gql`
query{
    obtieneProveedores{
        id
        estatus
        nombre
        fechaAlta
        disponible
        descripcion
        precio
    }
  }
`;

const ELIMINA_PROVEEDOR = gql`
  mutation eliminaProveedor {
    eliminaProveedor(proveedorId: $proveedorId) {
     
    }
  }
`;

export { OBTIENE_PROVEEDORES, ELIMINA_PROVEEDOR }
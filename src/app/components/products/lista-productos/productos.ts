export interface Producto {
    id_producto?: string;
    nombre: string;
    precio: number;
    cantidad: number;
    iva: number;
    imgUrl: string;
    id_categoria: string;
    id_proveedor: string;
}
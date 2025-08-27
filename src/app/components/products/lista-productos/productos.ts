export interface Producto {
    id_producto?: number;
    nombre: string;
    precio: number;
    cantidad: number;
    iva: number;
    id_categoria: number;
    id_proveedor: number;
    imgUrl: string;
}
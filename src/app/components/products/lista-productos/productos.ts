export interface Producto {
    id_producto?: number;
    nombre: string;
    precio: number;
    cantidad: number;
    iva: number;
    categoria?: { id_categoria: number; nombre: string };
    proveedor?: { id_proveedor: number; nombre: string };
    imgUrl: string;
}
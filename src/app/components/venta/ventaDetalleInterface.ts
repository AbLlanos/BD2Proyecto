export interface VentaDetalle {
  id_detalle?: string;
  id_venta?: string;
  id_producto: string;
  nombre_producto?: string;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
  iva: number;
  descuento: number;
  fecha?: Date;
}
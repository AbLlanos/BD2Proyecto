export interface VentaDetalle {
  id_detalle?: number;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
  producto: { id_producto: number };
}

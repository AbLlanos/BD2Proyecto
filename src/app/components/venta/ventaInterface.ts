import { VentaDetalle } from "./ventaDetalleInterface";

export interface Venta {
  id_venta?: string;
  fecha: Date;
  total: number;
  iva_total: number;
  descuento_total: number;
  estado: "pendiente" | "pagado" | "anulado";
  metodo_pago: "efectivo" | "tarjeta" | "transferencia";
  id_cliente: string;
  id_empleado: string;
  detalles: string[];
}
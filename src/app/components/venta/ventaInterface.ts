import { VentaDetalle } from "./ventaDetalleInterface";

export interface Venta {
  id_venta?: number;
  fecha: Date;
  total: number;
  iva_total: number;
  estado: string;
  cliente: { id_cliente: number };
  empleado: { id_empleado: number };
  detalles: VentaDetalle[];
}

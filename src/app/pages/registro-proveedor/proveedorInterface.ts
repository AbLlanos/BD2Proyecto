export interface Proveedor {
  id_proveedor?: number;
  nombre: string;
  ruc: string;
  razon_social: string;
  correo: string;
  telefono: string;
  direccion: string;
  estado?: boolean;
}

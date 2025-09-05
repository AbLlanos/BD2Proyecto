export interface Proveedor {
    id_proveedor?: string;
    nombre: string;
    ruc: string;
    razon_social: string;
    correo: string;
    telefono: string;
    direccion: string;
    estado: string;
    fecha_registro: Date;
    productos?: string[];
}

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { ListaProductos } from './components/products/lista-productos/lista-productos';
import { FormularioRegistroProductos } from './components/products/formulario-registro-productos/formulario-registro-productos';
import { RegistroComponent } from './pages/registro/registro.component'; // <-- IMPORTA TU PÁGINA
import { RegistroProveedorComponent } from './pages/registro-proveedor/registro-proveedor.component';
import { RegistroCategoriaComponent } from './pages/registro-categoria/registro-categoria.component';
import { FormularioRegistroProveedor } from './components/proveedor/formulario-registro-proveedor/formulario-registro-proveedor';
import { FormularioRegistroCategoria } from './components/categoria/formulario-registro-categoria/formulario-registro-categoria';
import { VentaComponent } from './components/venta/venta';


export const routes: Routes = [

    /*Rutas generales*/
    { path: "home", component: Home },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "nosotros", component: Nosotros },

    /*Rutas Productos*/
    { path: "listaProductos", component: ListaProductos },
    { path: "registroProductos", component: FormularioRegistroProductos },

    /*Ruta Registro Empleados y Clientes*/
    { path: "registro", component: RegistroComponent },
    /*Ruta para Registro Proveedor*/
    {path: "registro-proveedor", component: FormularioRegistroProveedor} ,
    {path: "registro-categoria", component: FormularioRegistroCategoria},

    /*Ventra*/
    {path: "registroVenta", component: VentaComponent}
];

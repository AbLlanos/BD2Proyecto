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
import { EditarCategoria } from './components/edicion/editar-categoria/editar-categoria';
import { EditarProducto } from './components/edicion/editar-producto/editar-producto';
import { EditarProveedor } from './components/edicion/editar-proveedor/editar-proveedor';
import { EditarEmpleado } from './components/edicion/editar-empleado/editar-empleado';
import { EditarCliente } from './components/edicion/editar-cliente/editar-cliente';


export const routes: Routes = [

  /*Rutas generales*/
  { path: "home", component: Home },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "nosotros", component: Nosotros },

  /*Rutas Productos*/
  { path: "listaProductos", component: ListaProductos },
  { path: "registroProductos", component: FormularioRegistroProductos },
  { path: "editar-producto/:id", component: EditarProducto },

  /*Ruta Registro Empleados y Clientes*/
  { path: "registro", component: RegistroComponent },

  { path: "editar-empleado/:id", component: EditarEmpleado },

  /*Rutas de clientes*/
  { path: "editar-cliente/:id", component: EditarCliente },

    /*Rutas Proveedor*/
  { path: "registro-proveedor", component: FormularioRegistroProveedor },
  { path: "editar-proveedor/:id", component: EditarProveedor },

  // Rutas Categorias
  { path: "registro-categoria", component: FormularioRegistroCategoria },
  { path: "editar-categoria/:id", component: EditarCategoria },

  /*Ventra*/
  { path: "registroVenta", component: VentaComponent }
];

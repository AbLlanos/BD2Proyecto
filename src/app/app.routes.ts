import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { ListaProductos } from './components/products/lista-productos/lista-productos';
import { FormularioRegistroProductos } from './components/products/formulario-registro-productos/formulario-registro-productos';
import { RegistroComponent } from './pages/registro/registro.component'; // <-- IMPORTA TU PÁGINA

export const routes: Routes = [

    /*Rutas generales*/
    { path: "home", component: Home },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "nosotros", component: Nosotros },

    /*Rutas Productos*/
    { path: "listaProductos", component: ListaProductos },
    { path: "registroProductos", component: FormularioRegistroProductos },

    /*Ruta Registro Empleados y Clientes*/
    { path: "registro", component: RegistroComponent } 

];

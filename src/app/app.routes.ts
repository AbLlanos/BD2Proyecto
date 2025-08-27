import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { ListaProductos } from './components/products/lista-productos/lista-productos';
import { FormularioRegistroProductos } from './components/products/formulario-registro-productos/formulario-registro-productos';

export const routes: Routes = [


    /*Rutas geneales*/

    { path: "home", component: Home },

    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "nosotros", component: Nosotros},

    /*Rutas Productos*/

    { path: "listaProductos", component: ListaProductos},

    { path: "registroProductos", component: FormularioRegistroProductos }

];

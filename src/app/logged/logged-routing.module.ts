import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        children:[
            {
                path: 'pedidos',
                component: PedidosComponent
            },
            {
                path: 'productos',
                component: ProductosComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoggedRoutingModule {}
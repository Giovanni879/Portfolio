import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RxjsComponent } from './components/RXJS/RXJS.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        children:[
            {
                path: 'RXJS',
                component: RxjsComponent
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
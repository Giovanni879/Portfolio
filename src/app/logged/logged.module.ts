import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { MaterialModule } from '../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';



@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, ProductosComponent, PedidosComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule
  ]
})
export class LoggedModule { }

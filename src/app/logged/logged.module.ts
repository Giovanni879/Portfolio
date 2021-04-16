import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { MaterialModule } from '../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RxjsComponent } from './components/RXJS/RXJS.component';
import { HighlightJsConfig, HighlightJsModule, HIGHLIGHTJS_CONFIG } from 'ngx-highlight-js';



@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, ProductosComponent, RxjsComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    HighlightJsModule
  ],
  providers: [
    { 
      provide: HIGHLIGHTJS_CONFIG, 
      useValue: { 
        lang: 'html'
      } as HighlightJsConfig 
    }
  ],
})
export class LoggedModule { }

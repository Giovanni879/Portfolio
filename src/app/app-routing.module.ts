import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* ngrouter */
/* se debe importar en appmodule */
const routes: Routes = [
    {
        path:'logged',
        loadChildren: () => import('../app/logged/logged.module')
            .then(m => m.LoggedModule),
        /* cuando la ruta sea en blanco el administrador de vistas sea el logged */
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


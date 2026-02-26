import { Routes } from '@angular/router';
import { SgiComponent } from './sgi-component/sgi-component';
import { HomePage } from './home-page/home-page';
import { CediPage } from './cedi-page/cedi-page';
import { FarmaciaPage } from './farmacia-page/farmacia-page';
import { MantenimientoPage } from './mantenimiento-page/mantenimiento-page';
import { ContabilidadPage } from './contabilidad-page/contabilidad-page';
import { VentasYComprasPage } from './ventas-y-compras-page/ventas-y-compras-page';
import { GestionHumana } from './gestion-humana/gestion-humana';
import { Cmp } from './cmp/cmp';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'sgi', component: SgiComponent },
    { path: 'cedi', component: CediPage },
    { path: 'farmacia', component: FarmaciaPage},
    { path:'mantenimiento', component: MantenimientoPage},
    { path: 'contabilidad', component: ContabilidadPage},
    { path:'ventas-y-compras', component: VentasYComprasPage},
    { path: 'gestion-humana', component: GestionHumana},
    { path: 'central-de-mezclas', component: Cmp},
    {path: '**', redirectTo: '/' }
];

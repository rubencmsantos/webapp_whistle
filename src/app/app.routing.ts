import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArbitroComponent } from './arbitros/arbitros.component';
import { NomeacoesComponent } from './nomeacoes/nomeacoes.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    },
    {
        path: 'arbitros',
        component: ArbitroComponent
    },
    {
        path: 'nomeacoes',
        component: NomeacoesComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
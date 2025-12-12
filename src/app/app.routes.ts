import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent)
    },
    {
        path: 'cad-shipbroker',
        loadComponent: () => import('./pages/cad-shipbroker/cad-shipbroker.component').then(m => m.CadShipbrokerComponent)
    },
    {
        path: 'cad-bunkering',
        loadComponent: () => import('./pages/cad-bunkering/cad-bunkering.component').then(m => m.CadBunkeringComponent)
    }
];

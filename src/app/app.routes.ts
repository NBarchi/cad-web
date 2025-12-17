import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';

export const routes: Routes = [

    {
        path: 'news/:id',
        loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent)
    },
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
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin-page/admin-page.component').then(m => m.AdminPageComponent)
    }
];



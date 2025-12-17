import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers:[ 
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideFirebaseApp(() => 
      initializeApp({ 
        projectId: "cad-web-22966", 
        appId: "1:657996662474:web:96dd81bcdb74b67fa89633", 
        storageBucket: "cad-web-22966.firebasestorage.app", 
        apiKey: "AIzaSyB-ta-XOk7mb2YbT7Bf-IPB_NoYKD_ua98", 
        authDomain: "cad-web-22966.firebaseapp.com", 
        messagingSenderId: "657996662474",  
      })
    ), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ]
};

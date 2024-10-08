import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { ProductEffects } from './features/products/state/products.effects';
import { productsReducer } from './features/products/state/products.reducers';

registerLocaleData(localeEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding()),
    provideStore({ products: productsReducer }),
    provideEffects([ProductEffects]),
    environment.providers,
  ],
};

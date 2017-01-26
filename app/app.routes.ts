import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { mainpageRoutes }    from './mainpage/mainpage.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
  ...mainpageRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
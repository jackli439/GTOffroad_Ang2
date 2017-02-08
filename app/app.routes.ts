import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { mainpageRoutes }    from './mainpage/mainpage.routes';
import { gtor_infoRoutes }    from './gtor_info/gtor_info.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
  ...mainpageRoutes,
  ...gtor_infoRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
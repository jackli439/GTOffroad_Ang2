import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { mainpageRoutes }    from './mainpage/mainpage.routes';
import { gtor_infoRoutes }    from './gtor_info/gtor_info.routes';
import { calendarRoutes }    from './calendar/calendar.routes';
import { how_do_i_joinRoutes }    from './how_do_i_join/how_do_i_join.routes';
import { interestedRoutes }    from './interested/interested.routes';
import { rankingsRoutes }    from './rankings/rankings.routes';
import { sponsorsRoutes }    from './sponsors/sponsors.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
  ...mainpageRoutes,
  ...gtor_infoRoutes,
  ...calendarRoutes,
  ...how_do_i_joinRoutes,
  ...interestedRoutes,
  ...rankingsRoutes,
  ...sponsorsRoutes


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
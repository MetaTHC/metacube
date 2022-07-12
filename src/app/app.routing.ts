import { Route } from '@angular/router';
import { LayoutComponent } from '../settings/theme/layout/layout.component';

export const appRoutes: Route[] = [
  { path: '', // PUBLIC ROUTES
    component: LayoutComponent,
    data: { layout: 'default' },
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    ]
  },
  { path: '',
    // component: LayoutComponent,
    data: { layout: 'default' },
    children: [
      { path: 'login', loadChildren: () => import('../settings/security/assets/login/login.module').then(m => m.LoginModule) },
    ]
  }
]

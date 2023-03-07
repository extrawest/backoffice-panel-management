import {Route} from '@angular/router';
import {ShellComponent} from './shell/shell.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      // {
      //   path: 'clients',
      //   component: ClientsComponent,
      // },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full'
}, {
  path: 'app',   loadChildren: () => System.import('./layout/layout.module')
}, {
  path: 'login', loadChildren: () => System.import('./login/login.module')
}, {
  path: 'landing', loadChildren: () => System.import('./landing/landing.module')
}, {
  path: 'error', component: ErrorComponent
}, {
  path: '**',    component: ErrorComponent
}
];

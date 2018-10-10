import { Routes, RouterModule } from '@angular/router';
import { AnotationComponent } from './components/anotation/anotation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anotation', component: AnotationComponent },
  { path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });

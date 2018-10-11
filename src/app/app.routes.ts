import { AnotationsComponent } from './components/anotations/anotations.component';
import { Routes, RouterModule } from '@angular/router';
import { AnotationComponent } from './components/anotation/anotation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anotation', component: AnotationComponent },
  { path: 'anotations', component: AnotationsComponent },
  { path: 'about-me', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });

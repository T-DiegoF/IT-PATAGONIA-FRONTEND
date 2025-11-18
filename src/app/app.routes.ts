import { Routes } from '@angular/router';
import { CompanyFormComponent } from './views/company-form.component';


export const routes: Routes = [
  { path: 'companies', component: CompanyFormComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }
];